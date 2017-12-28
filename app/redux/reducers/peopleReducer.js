import {
  FETCHING_PEOPLE_REQUEST,
  FETCHING_PEOPLE_SUCCESS,
  FETCHING_PEOPLE_FAILURE
} from "../actions/types";

const initialState = {
  people: [],
  isFetching: false,
  errorMessage: ""
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PEOPLE_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_PEOPLE_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_PEOPLE_SUCCESS:
      return { ...state, isFetching: false, people: action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
