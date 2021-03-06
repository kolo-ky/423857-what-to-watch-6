// api
import {addMovieCommentsApi, getMovieCommentsApi} from "../api/comments";

export const apiFunc = {
  addComment: addMovieCommentsApi,
  getComments: getMovieCommentsApi
};
