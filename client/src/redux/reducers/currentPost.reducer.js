import { SET_CURRENT_POST } from '../types'

export const currentPostReducer = (state = false, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CURRENT_POST: {
      const post = payload
      return post
    }
    default: {
      return state
    }
  }
}

