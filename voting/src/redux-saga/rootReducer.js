import { combineReducers } from "redux";
import ElectionReducer from "./Admin/Election/ElectionReducer";
import PartyReducer from "./Admin/Party/PartyReducer";
import UserReducer from "./Admin/User/UserReducer"
import ConnectReducer from "../redux-saga/Admin/Connect/connectReducer";
import VoteReducer from "../redux-saga/User/Vote/VoteReducer"

const rootReducer = combineReducers({
  ElectionReducer,
  PartyReducer,
  UserReducer,
  ConnectReducer,
  VoteReducer,
});

export default rootReducer;