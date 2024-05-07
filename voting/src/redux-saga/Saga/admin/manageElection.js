import { call, put } from "redux-saga/effects";
import {
  delete_election_api,
  get_election_api,
  post_election_api,
  update_election_api,
} from "../../Admin/Election/ElectionApi";
import {
  DELETE_ELECTION_ERROR,
  DELETE_ELECTION_SUCCESS,
  GET_ELECTION_ERROR,
  GET_ELECTION_SUCCESS,
  POST_ELECTION_ERROR,
  POST_ELECTION_SUCCESS,
  UPDATE_ELECTION_ERROR,
  UPDATE_ELECTION_SUCCESS,
} from "../../Admin/Election/ElectionAction";

export function* handle_Get_election_api(action) {
  try {
    const res = yield call(get_election_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: GET_ELECTION_SUCCESS, data });
    } else {
      yield put({ type: GET_ELECTION_ERROR, data });
    }
  } catch (error) {
    yield put({ type: GET_ELECTION_ERROR, error });
  }
}

export function* handle_post_election_api(action) {
  try {
    const res = yield call(post_election_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: POST_ELECTION_SUCCESS, data });
    } else {
      yield put({ type: POST_ELECTION_ERROR, data });
    }
  } catch (error) {
    yield put({ type: POST_ELECTION_ERROR, error });
  }
}

export function* handle_delete_election_api(action) {
  try {
    const res = yield call(delete_election_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: DELETE_ELECTION_SUCCESS, data });
    } else {
      yield put({ type: DELETE_ELECTION_ERROR, data });
    }
  } catch (error) {
    yield put({ type: DELETE_ELECTION_ERROR, error });
  }
}

export function* handle_update_election_api(action) {
  try {
    const res = yield call(update_election_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: UPDATE_ELECTION_SUCCESS, data });
    } else {
      yield put({ type: UPDATE_ELECTION_ERROR, data });
    }
  } catch (error) {
    yield put({ type: UPDATE_ELECTION_ERROR, error });
  }
}
