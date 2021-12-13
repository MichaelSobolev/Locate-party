import { SET_CURRENT_POST } from '../types'

export const currentPostReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CURRENT_POST: {
      const post = payload
      console.log(post)
      return post
    }
    default: {
      return state
    }
  }
}

