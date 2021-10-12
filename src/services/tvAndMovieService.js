import http from "./httpService";

const { REACT_APP_API_BASE_URL: API_BASE_URL, REACT_APP_API_KEY: API_KEY } =
  process.env;

const API_KEY_QUERY_STRING = `api_key=${API_KEY}`;

export const TYPE_TV = "tv";
export const TYPE_MOVIE = "movie";

export const getLatestShow = async (type) => {
  try {
    const { data: latest } = await http.get(
      `${API_BASE_URL}/${type}/latest?${API_KEY_QUERY_STRING}`
    );

    return latest;
  } catch (err) {
    console.log(`Error in getting latest ${type}: ${err}`);
  }
};

