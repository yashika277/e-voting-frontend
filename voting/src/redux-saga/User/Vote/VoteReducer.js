import {
  DELETE_VOTE_ERROR,
  DELETE_VOTE_PROGRESS,
  DELETE_VOTE_SUCCESS,
  GET_VOTE_ERROR,
  GET_VOTE_PROGRESS,
  GET_VOTE_SUCCESS,
  POST_VOTE_ERROR,
  POST_VOTE_PROGRESS,
  POST_VOTE_SUCCESS,
} from "../Vote/VoteAction";

const initialState = {
  data: [],
  isLoding: false,
  isError: null,
};

const VoteReducer = (state = { ...initialState }, action) => {
  // console.log(action);
  switch (action.type) {
    //VOTE
    case GET_VOTE_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case GET_VOTE_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: action.data,
        isError: null,
      };
    case GET_VOTE_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case POST_VOTE_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case POST_VOTE_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: state.data.concat(action.data.Data),
        isError: null,
      };
    case POST_VOTE_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case DELETE_VOTE_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case DELETE_VOTE_SUCCESS:
      const filterVote = state.data.filter((val) => val._id !== action.data);
      return {
        ...state,
        isLoding: false,
        data: filterVote,
        isError: null,
      };
    case DELETE_VOTE_ERROR:
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
export default VoteReducer;
