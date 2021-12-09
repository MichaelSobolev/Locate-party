import { CREATE_POST,  } from '../types'

export const postReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case CREATE_POST: {
      const { error } = payload
      return {
        value: null,
        error
      }
    }
    default: {
      return state
    }
  }
}
