import { CREATE_POST, SET_POSTS } from '../types'

export const postReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case CREATE_POST: {
      const { newPost } = payload
      return [...state, newPost]
    }
    case SET_POSTS: {
      const posts = payload
      return posts
    }
    default: {
      return state
    }
  }
}

