import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      //As we use an object and not an array to store the data:
      return _.omit(state, action.payload);
    case FETCH_POST:
      //With ES6 key interpolation
      return { ...state, [action.payload.data.id]: action.payload.data };
      // Steps for fetching post
      // const post = action.payload.data;
      // const newState = { ...state};
      // newState[post.id] = post;
      // return newState;
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}