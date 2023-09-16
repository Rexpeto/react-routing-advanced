import axios from "axios";

const rickApi = "https://rickandmortyapi.com/api";
const characterApi = `${rickApi}/character`;

/*
 * Get character of rick and morty api
 * @param {string} character
 * returns Character of api
 * */
export const getMorty = (character: string) => {
  return axios(`${characterApi}/${character}`);
};
