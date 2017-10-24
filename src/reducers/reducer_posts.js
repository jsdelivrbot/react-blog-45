import { FETCH_POSTS } from '../actions/index'
const INITIAL_STATE = {
  all: [],
  post: null
}

export default function(state = INITIAL_STATE, action) {
  // the data will will be returned at action.payload.data
  // as described in action
  switch (action.type) {
    case FETCH_POSTS:
    // always return state
      return {
        ...state, all: action.payload.data
      }
      break;
    default:
      return state
  }
}
