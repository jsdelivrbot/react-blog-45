import axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=dodoliveshere'
export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'

export function fetchPosts(state, action) {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(prop) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, prop)
  return {
    type: CREATE_POST,
    payload: request
  }
}
