import {
  DELETE_CONNECT_ERROR,
  DELETE_CONNECT_PROGRESS,
  DELETE_CONNECT_SUCCESS,
  GET_CONNECT_ERROR,
  GET_CONNECT_PROGRESS,
  GET_CONNECT_SUCCESS,
  POST_CONNECT_ERROR,
  POST_CONNECT_PROGRESS,
  POST_CONNECT_SUCCESS,
} from "../Connect/connectAction.js";

const initialState = {
  data: [],
  isLoding: false,
  isError: null,
};

const ConnectReducer = (state = { ...initialState }, action) => {
  // console.log(action);
  switch (action.type) {
    //CONNECT
    case GET_CONNECT_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case GET_CONNECT_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: action.data,
        isError: null,
      };
    case GET_CONNECT_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case POST_CONNECT_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case POST_CONNECT_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: state.data.concat(action.data.Data),
        isError: null,
      };
    case POST_CONNECT_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case DELETE_CONNECT_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case DELETE_CONNECT_SUCCESS:
      const filterConnect = state.data.filter((val) => val._id !== action.data);
      return {
        ...state,
        isLoding: false,
        data: filterConnect,
        isError: null,
      };
    case DELETE_CONNECT_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };
    default: {
      return { ...state };
    }
  }
};
export default ConnectReducer;
