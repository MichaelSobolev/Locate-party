import { CREATE_POST, DELETE_POST, SET_POSTS, UPDATE_POST } from '../types'

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
    case DELETE_POST: {
      const id = payload

      return state.filter(el => el.id !== id)
    }
    default: {
      return state
    }
  }
}

