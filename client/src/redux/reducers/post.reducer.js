import { CREATE_POST, SET_POSTS, UPDATE_POST } from '../types'

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
    case UPDATE_POST: {
      const post = payload
      return state.filter(el => el !== post)
    }
    default: {
      return state
    }
  }
}

