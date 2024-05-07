import axios from "axios";
import {
  BASE_URL,
  DELETE_ELECTION_API,
  GET_ELECTION_API,
  POST_ELECTION_API,
  UPDATE_ELECTION_API,
} from "../../constant";

export async function get_election_api() {
  return axios
    .get(BASE_URL + GET_ELECTION_API)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function post_election_api(action) {
  return axios
    .post(BASE_URL + POST_ELECTION_API, action.payload)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function delete_election_api(action) {
  console.log(action.payload._id);
  return axios
    .delete(BASE_URL + DELETE_ELECTION_API + action.payload._id)
    .then((res) => {
      const data = action.payload._id;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function update_election_api(action) {
  const Update = {
    ElectionName: action.payload.ElectionName,
    RegisterDate: action.payload.RegisterDate,
  };
  return axios
    .put(BASE_URL + UPDATE_ELECTION_API + action.payload._id, Update)
    .then((res) => {
      const data = action.payload;
      const status = res.status;
      return { data, status };
    })
    .catch((err) => {
      console.log(err);
    });
}
