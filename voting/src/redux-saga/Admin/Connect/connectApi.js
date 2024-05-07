import axios from "axios";
import {
  BASE_URL,
  DELETE_CONNECT_API,
  GET_CONNECT_API,
  POST_CONNECT_API,

} from "../../constant";

//CONNECT

export async function get_connect_api() {
  return axios
    .get(BASE_URL + GET_CONNECT_API)
    .then((res) => {
      const data = res.data.Data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function post_connect_api(action) {
  console.log("post connect api", action.payload);
  const connect = {
    Election: action.payload.Election,
    Party: action.payload.Party,
  };
  console.log(connect);
  return axios
    .post(BASE_URL + POST_CONNECT_API, action.payload)
    .then((res) => {
      console.log(action.payload);
      const data = res.data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function delete_connect_api(action) {
  console.log(action.payload._id);
  return axios
    .delete(BASE_URL + DELETE_CONNECT_API + action.payload._id)
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
