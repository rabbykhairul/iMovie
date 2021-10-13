import {
  TV_GENRES,
  MOVIE_GENRES,
  TYPE_MOVIE,
} from "../services/tvAndMovieService";

const getGenreName = (genreId, type) => {
  let genreName = "";
  let genres = type === TYPE_MOVIE ? MOVIE_GENRES : TV_GENRES;

  for (let genre of genres) {
    if (genre.id === genreId) {
      genreName = genre.name;
      break;
    }
  }

  return genreName;
};

const formatGenresArray = (genres, type) => {
  return genres.map((g) => {
    if (typeof g === "object") {
      return g.name;
    } else return getGenreName(g, type);
  });
};

export const formatMovieTVDetails = (data, type) => {
  const formattedData = { ...data };

  formattedData.title = formattedData.title || formattedData.name;
  formattedData.genres = formatGenresArray(
    formattedData.genres || formattedData.genre_ids,
    type
  );
  formattedData.rating = Math.ceil(formattedData.vote_average / 2);
  formattedData.type = type;

  return formattedData;
};
