import {
  FETCHING_PEOPLE_REQUEST,
  FETCHING_PEOPLE_SUCCESS,
  FETCHING_PEOPLE_FAILURE
} from "./types";

export const fetchingPeopleRequest = () => ({ type: FETCHING_PEOPLE_REQUEST });

export const fetchingPeopleSuccess = json => ({
  type: FETCHING_PEOPLE_SUCCESS,
  payload: json
});

export const fetchingPeopleFailure = error => ({
  type: FETCHING_PEOPLE_FAILURE,
  payload: error
});

export const fetchPeople = () => {
  return async dispatch => {
    dispatch(fetchingPeopleRequest());
    try {
      let response = await fetch("https://randomuser.me/api/?results=15");
      let json = await response.json();
      dispatch(fetchingPeopleSuccess(json.results));
    } catch (error) {
      dispatch(fetchingPeopleFailure(error));
    }
  };
};
