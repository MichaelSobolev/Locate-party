import { CREATE_POST, SET_POSTS, SET_STATUS, DELETE_TODO, DEL_ALL_TODOS } from "../types"

export const getPosts = (newPost) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/posts`, { //TODO Добавить .env для API
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    'credentials': 'include'
  })
  const posts = await response.json()
  dispatch({ type: SET_POSTS, payload: posts })
}

export const createPost = (newPost) => async (dispatch) => {
  await fetch(`http://localhost:3001/posts`, { //TODO Добавить .env для API
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    'credentials': 'include',
    body: JSON.stringify(newPost)
  })

  dispatch(
    {
      type: CREATE_POST,
      payload: { newPost }
    })
}

// export const getAllTodos = (todos) => ({
//   type: GET_ALL_TODOS,
//   payload: { todos }
// })

// export const setStatus = (changeTodo) => ({
//   type: SET_STATUS,
//   payload: { changeTodo }
// })

// export const removeTodo = (deleteTodo) => ({
//   type: DELETE_TODO,
//   payload: { deleteTodo }
// })

// export const removeAllTodos = (/*todos*/) => ({
//   type: DEL_ALL_TODOS,
//   payload: {} //{ todos }
// })
