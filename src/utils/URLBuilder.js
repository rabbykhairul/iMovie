export const WIDTH_92 = "w92";
export const WIDTH_185 = "w185";
export const WIDTH_300 = "w300";
export const WIDTH_342 = "w342";
export const WIDTH_500 = "w500";
export const WIDTH_780 = "w780";
export const WIDTH_1280 = "w1280";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

export const buildImageURL = (fileName, width) =>
  `${IMAGE_BASE_URL}/${width}${fileName}`;
