import axios from "axios";
import {
  BASE_URL,
  DELETE_USER_API,
  GET_USER_API,
  POST_USER_API,
  UPDATE_USER_API,
} from "../../constant";

//USER

export async function get_user_api() {
  return axios
    .get(BASE_URL + GET_USER_API)
    .then((res) => {
      const data = res.data.Data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function post_user_api(action) {
  console.log(action);

  return axios
    .post(BASE_URL + POST_USER_API, action.payload)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      console.log("99999 Data ((((", res);
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function delete_user_api(action) {
  console.log(action.payload._id);
  return axios
    .delete(BASE_URL + DELETE_USER_API + action.payload._id)
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

export function update_user_api(action) {
  console.log(action.payload);
  const Update = {
    Address: action.payload.Address,
    // Password:action.payload.Password,
    CardNumber: action.payload,
    DOB: action.payload.DOB,
    Email: action.payload.Email,
    Name: action.payload.Name,
    Phone: action.payload.Phone,
    Profile: action.payload.Profile,
    Sex: action.payload.Sex,
  };
  return axios
    .put(BASE_URL + UPDATE_USER_API + action.payload._id, Update)
    .then((res) => {
      const data = Update;
      const status = res.status;
      return { data, status };
    })
    .catch((err) => {
      console.log(err);
    });
}
