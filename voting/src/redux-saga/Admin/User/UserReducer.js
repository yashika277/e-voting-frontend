import {
  DELETE_USER_ERROR,
  DELETE_USER_PROGRESS,
  DELETE_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_PROGRESS,
  GET_USER_SUCCESS,
  POST_USER_ERROR,
  POST_USER_PROGRESS,
  POST_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_PROGRESS,
  UPDATE_USER_SUCCESS,
} from "../User/UserAction";

const initialState = {
  data: [],
  isLoding: false,
  isError: null,
};

const UserReducer = (state = { ...initialState }, action) => {
  // console.log(action.payload,);
  switch (action.type) {
    //USER
    case GET_USER_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case GET_USER_SUCCESS:
      const UserData = action.data.filter((val) => val.Role === "user");
      return {
        ...state,
        isLoding: false,
        data: UserData,
        isError: null,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case POST_USER_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: state.data.concat(action.data.Data),
        isError: null,
      };
    case POST_USER_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case DELETE_USER_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case DELETE_USER_SUCCESS:
      const filterUSER = state.data.filter((val) => val._id !== action.data);
      return {
        ...state,
        isLoding: false,
        data: filterUSER,
        isError: null,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case UPDATE_USER_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case UPDATE_USER_SUCCESS:
      const updateData = state.data.map((state) =>
        state.id === action.data.id ? action.data : state
      );
      return {
        ...state,
        isLoding: false,
        data: updateData,
        isError: null,
      };
    case UPDATE_USER_ERROR:
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
export default UserReducer;
