import { DELETE_USER_PROGRESS, GET_USER_PROGRESS, POST_USER_PROGRESS, UPDATE_USER_PROGRESS } from "../../Admin/User/UserAction";
import { takeLatest } from "@redux-saga/core/effects";
import {
  handle_Get_user_api,
  handle_delete_user_api,
  handle_post_user_api,
  handle_update_user_api,
} from "../admin/manageUser";

//user
export function* get_user_saga() {
  yield takeLatest(GET_USER_PROGRESS, handle_Get_user_api);
}

export function* post_user_saga() {
  yield takeLatest(POST_USER_PROGRESS, handle_post_user_api);
}

export function* delete_user_saga() {
  yield takeLatest(DELETE_USER_PROGRESS, handle_delete_user_api);
}

export function* update_user_saga() {
  yield takeLatest(UPDATE_USER_PROGRESS, handle_update_user_api);
}
