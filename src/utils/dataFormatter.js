const formatGenresArray = (genres) => {
  return genres.map((g) => {
    if (typeof g === "object") {
      return g.name;
    } else return g;
  });
};

export const formatMovieTVDetails = (data) => {
  const formattedData = { ...data };

  formattedData.title = formattedData.title || formattedData.name;
  formattedData.genres = formatGenresArray(
    formattedData.genres || formattedData.genre_ids
  );
  formattedData.rating = Math.ceil(formattedData.vote_average / 2);

  return formattedData;
};
