import {
  delete_election_saga,
  update_election_saga,
  get_election_saga,
  post_election_saga,
} from "./root/rootElection";

import { delete_party_saga, get_party_saga, post_party_saga, update_party_saga } from "./root/rootParty";
import { all } from "@redux-saga/core/effects";
import { delete_user_saga, get_user_saga, post_user_saga, update_user_saga } from "./root/rootUser";
import { delete_connect_saga, get_connect_saga, post_connect_saga } from "./root/rootConnect";
import { delete_vote_saga, get_vote_saga, post_vote_saga } from "./root/rootVote";

export function* rootSaga() {
  yield all([
    // election saga
    get_election_saga(),
    post_election_saga(),
    delete_election_saga(),
    update_election_saga(),

    // Party Sagas
    get_party_saga(),
    post_party_saga(),
    delete_party_saga(),
    update_party_saga(),

    // User Sagas
    get_user_saga(),
    post_user_saga(),
    delete_user_saga(),
    update_user_saga(),

     // Connect Sagas
    get_connect_saga(),
    post_connect_saga(),
    delete_connect_saga(),

     // vote Sagas
    get_vote_saga(),
    post_vote_saga(),
    delete_vote_saga(),
  ])
}
