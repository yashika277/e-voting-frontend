import { DELETE_ELECTION_PROGRESS,  GET_ELECTION_PROGRESS,  POST_ELECTION_PROGRESS,  UPDATE_ELECTION_PROGRESS, } from "../../Admin/Election/ElectionAction";
import { takeLatest } from "@redux-saga/core/effects";
import { handle_Get_election_api, handle_delete_election_api,  handle_post_election_api,  handle_update_election_api, } from "../admin/manageElection";


export function* get_election_saga() {
    yield takeLatest(GET_ELECTION_PROGRESS,handle_Get_election_api)
}

export function* post_election_saga() {
    yield takeLatest(POST_ELECTION_PROGRESS,handle_post_election_api)
}

export function* delete_election_saga() {
    yield takeLatest(DELETE_ELECTION_PROGRESS,handle_delete_election_api)
}

export function* update_election_saga() {
  yield takeLatest(UPDATE_ELECTION_PROGRESS, handle_update_election_api);
}