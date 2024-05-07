import { call, put } from "redux-saga/effects";
import {
  delete_party_api,
  get_party_api,
  post_party_api,
  update_party_api,
} from "../../Admin/Party/PartyApi";
import {
  DELETE_PARTY_ERROR,
  DELETE_PARTY_SUCCESS,
  GET_PARTY_ERROR,
  GET_PARTY_SUCCESS,
  POST_PARTY_ERROR,
  POST_PARTY_SUCCESS,
  UPDATE_PARTY_ERROR,
  UPDATE_PARTY_SUCCESS,
} from "../../Admin/Party/PartyAction";


//PARTY
export function* handle_Get_party_api(action) {
  try {
    const res = yield call(get_party_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: GET_PARTY_SUCCESS, data });
    } else {
      yield put({ type: GET_PARTY_ERROR, data });
    }
  } catch (error) {
    yield put({ type: GET_PARTY_ERROR, error });
  }
}

export function* handle_post_party_api(action) {
  try {
    const res = yield call(post_party_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: POST_PARTY_SUCCESS, data });
    } else {
      yield put({ type: POST_PARTY_ERROR, data });
    }
  } catch (error) {
    yield put({ type: POST_PARTY_ERROR, error });
  }
}

export function* handle_delete_party_api(action) {
  try {
    const res = yield call(delete_party_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: DELETE_PARTY_SUCCESS, data });
    } else {
      yield put({ type: DELETE_PARTY_ERROR, data });
    }
  } catch (error) {
    yield put({ type: DELETE_PARTY_ERROR, error });
  }
}

export function* handle_update_party_api(action) {
  try {
    const res = yield call(update_party_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: UPDATE_PARTY_SUCCESS, data });
    } else {
      yield put({ type: UPDATE_PARTY_ERROR, data });
    }
  } catch (error) {
    yield put({ type: UPDATE_PARTY_ERROR, error });
  }
}
