

import { SET_USER_ID } from '../types'

export const userInfoReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USER_ID: {
      const user_id = payload
      return user_id
    }
    default: {
      return state
    }
  }
}

