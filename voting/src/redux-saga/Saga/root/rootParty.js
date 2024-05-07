import {
  DELETE_PARTY_PROGRESS,
  GET_PARTY_PROGRESS,
  POST_PARTY_PROGRESS,
  UPDATE_PARTY_PROGRESS,
} from "../../Admin/Party/PartyAction";
import { takeLatest } from "@redux-saga/core/effects";
import {
  handle_Get_party_api,
  handle_delete_party_api,
  handle_post_party_api,
  handle_update_party_api,
} from "../admin/manageParty";


//PARTY
export function* get_party_saga() {
  yield takeLatest(GET_PARTY_PROGRESS, handle_Get_party_api);
}

export function* post_party_saga() {
  yield takeLatest(POST_PARTY_PROGRESS, handle_post_party_api);
}

export function* delete_party_saga() {
  yield takeLatest(DELETE_PARTY_PROGRESS, handle_delete_party_api);
}

export function* update_party_saga() {
  yield takeLatest(UPDATE_PARTY_PROGRESS, handle_update_party_api);
}
