import {
  DELETE_VOTE_PROGRESS,
  GET_VOTE_PROGRESS,
  POST_VOTE_PROGRESS,
} from "../../User/Vote/VoteAction";
import { takeLatest } from "@redux-saga/core/effects";
import {
  handle_Get_vote_api,
  handle_delete_vote_api,
  handle_post_vote_api,
} from "../user/ManageVote";

//vote
export function* get_vote_saga() {
  yield takeLatest(GET_VOTE_PROGRESS, handle_Get_vote_api);
}

export function* post_vote_saga() {
  yield takeLatest(POST_VOTE_PROGRESS, handle_post_vote_api);
}

export function* delete_vote_saga() {
  yield takeLatest(DELETE_VOTE_PROGRESS, handle_delete_vote_api);
}
