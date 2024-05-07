import axios from "axios";
import {
  BASE_URL,
  DELETE_VOTE_API,
  GET_VOTE_API,
  POST_VOTE_API,
} from "../../constant";

//VOTE

export async function get_vote_api() {
  return axios
    .get(BASE_URL + GET_VOTE_API)
    .then((res) => {
      const data = res.data.Data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function post_vote_api(action) {
  return axios
    .post(BASE_URL + POST_VOTE_API, action.payload)
    .then((res) => {
      console.log(res);
      console.log(action.payload);
      const data = res.data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function delete_vote_api(action) {
  console.log(action.payload._id);
  return axios
    .delete(BASE_URL + DELETE_VOTE_API + action.payload._id)
    .then((res) => {
      console.log(action.payload._id);

      const data = action.payload._id;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}
