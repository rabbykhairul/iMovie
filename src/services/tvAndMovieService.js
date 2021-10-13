import { formatMovieTVDetails } from "../utils/dataFormatter";
import http from "./httpService";

const { REACT_APP_API_BASE_URL: API_BASE_URL, REACT_APP_API_KEY: API_KEY } =
  process.env;

const API_KEY_QUERY_STRING = `api_key=${API_KEY}`;

export const TYPE_TV = "tv";
export const TYPE_MOVIE = "movie";

export let TV_GENRES = [];
export let MOVIE_GENRES = [];

export const loadGenres = async (type) => {
  try {
    const { data } = await http.get(
      `${API_BASE_URL}/genre/${type}/list?${API_KEY_QUERY_STRING}`
    );

    if (type === TYPE_TV) TV_GENRES = data.genres;
    else MOVIE_GENRES = data.genres;
  } catch (err) {
    console.log(`Error in getting latest ${type}: ${err}`);
  }
};

export const getMovieContentRating = async (movieId) => {
  try {
    const {
      data: { results },
    } = await http.get(
      `${API_BASE_URL}/movie/${movieId}/release_dates?${API_KEY_QUERY_STRING}`
    );

    return results.reduce((rating, ratingInfo) => {
      return ratingInfo.iso_3166_1 === "US" && ratingInfo.certification
        ? ratingInfo.certification
        : rating;
    }, "NA");
  } catch {}
};

export const getTVContentRating = async (tvId) => {
  try {
    const {
      data: { results },
    } = await http.get(
      `${API_BASE_URL}/tv/${tvId}/content_ratings?${API_KEY_QUERY_STRING}`
    );

    return results.reduce((rating, ratingInfo) => {
      return ratingInfo.iso_3166_1 === "US" && ratingInfo.rating
        ? ratingInfo.rating
        : rating;
    }, "NR");
  } catch {}
};

export const getLatestSeason = async (tvId) => {
  try {
    const { data: tvShowInfo } = await http.get(
      `${API_BASE_URL}/tv/${tvId}?${API_KEY_QUERY_STRING}`
    );

    return tvShowInfo.last_episode_to_air.season_number;
  } catch (err) {
    console.log(`Error in getting TV show ${tvId}: ${err}`);
  }
};

export const getLatestShow = async (type) => {
  try {
    const { data: latest } = await http.get(
      `${API_BASE_URL}/${type}/latest?${API_KEY_QUERY_STRING}`
    );

    return formatMovieTVDetails(latest, type);
  } catch (err) {
    console.log(`Error in getting latest ${type}: ${err}`);
  }
};

export const getNowPlayingShows = async (type) => {
  try {
    const nowPlaying = type === "movie" ? "now_playing" : "airing_today";
    const { data: nowPlayingShows } = await http.get(
      `${API_BASE_URL}/${type}/${nowPlaying}?${API_KEY_QUERY_STRING}`
    );

    return nowPlayingShows.results
      .slice(0, 12)
      .map((result) => formatMovieTVDetails(result, type));
  } catch (err) {
    console.log(`Error in getting now playing ${type}s: ${err}`);
  }
};

export const getMostPopularShows = async (type) => {
  try {
    const { data: popularShows } = await http.get(
      `${API_BASE_URL}/${type}/popular?${API_KEY_QUERY_STRING}`
    );

    return popularShows.results
      .slice(0, 12)
      .map((result) => formatMovieTVDetails(result, type));
  } catch (err) {
    console.log(`Error in getting most popular ${type}s: ${err}`);
  }
};
