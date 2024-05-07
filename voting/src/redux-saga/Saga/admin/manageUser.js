import { call, put } from "redux-saga/effects";
import { delete_user_api, get_user_api, post_user_api, update_user_api } from "../../Admin/User/UserApi";
import {
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  POST_USER_ERROR,
  POST_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from "../../Admin/User/UserAction";

//USER
export function* handle_Get_user_api(action) {
  try {
    const res = yield call(get_user_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: GET_USER_SUCCESS, data });
    } else {
      yield put({ type: GET_USER_ERROR, data });
    }
  } catch (error) {
    yield put({ type: GET_USER_ERROR, error });
  }
}

export function* handle_post_user_api(action) {
  try {
    const res = yield call(post_user_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: POST_USER_SUCCESS, data });
    } else {
      yield put({ type: POST_USER_ERROR, data });
    }
  } catch (error) {
    yield put({ type: POST_USER_ERROR, error });
  }
}

export function* handle_delete_user_api(action) {
  try {
    const res = yield call(delete_user_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: DELETE_USER_SUCCESS, data });
    } else {
      yield put({ type: DELETE_USER_ERROR, data });
    }
  } catch (error) {
    yield put({ type: DELETE_USER_ERROR, error });
  }
}

export function* handle_update_user_api(action) {
  try {
    const res = yield call(update_user_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: UPDATE_USER_SUCCESS, data });
    } else {
      yield put({ type: UPDATE_USER_ERROR, data });
    }
  } catch (error) {
    yield put({ type: UPDATE_USER_ERROR, error });
  }
}
