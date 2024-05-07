import { call, put } from "redux-saga/effects";
import { delete_connect_api, get_connect_api, post_connect_api } from "../../Admin/Connect/connectApi";
import {
  DELETE_CONNECT_ERROR,
  DELETE_CONNECT_SUCCESS,
  GET_CONNECT_ERROR,
  GET_CONNECT_SUCCESS,
  POST_CONNECT_ERROR,
  POST_CONNECT_SUCCESS,
} from "../../Admin/Connect/connectAction";

//CONNECT
export function* handle_Get_connect_api(action) {
  try {
    const res = yield call(get_connect_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: GET_CONNECT_SUCCESS, data });
    } else {
      yield put({ type: GET_CONNECT_ERROR, data });
    }
  } catch (error) {
    yield put({ type: GET_CONNECT_ERROR, error });
  }
}

export function* handle_post_connect_api(action) {
  try {
    const res = yield call(post_connect_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: POST_CONNECT_SUCCESS, data });
    } else {
      yield put({ type: POST_CONNECT_ERROR, data });
    }
  } catch (error) {
    yield put({ type: POST_CONNECT_ERROR, error });
  }
}

export function* handle_delete_connect_api(action) {
  try {
    const res = yield call(delete_connect_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: DELETE_CONNECT_SUCCESS, data });
    } else {
      yield put({ type: DELETE_CONNECT_ERROR, data });
    }
  } catch (error) {
    yield put({ type: DELETE_CONNECT_ERROR, error });
  }
}

