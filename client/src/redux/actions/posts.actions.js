import { ADD_TODO, GET_ALL_TODOS, SET_STATUS, DELETE_TODO, DEL_ALL_TODOS } from "../types"


export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: { newTodo }
})

export const getAllTodos = (todos) => ({
  type: GET_ALL_TODOS,
  payload: { todos }
})

export const setStatus = (changeTodo) => ({
  type: SET_STATUS,
  payload: { changeTodo }
})

export const removeTodo = (deleteTodo) => ({
  type: DELETE_TODO,
  payload: { deleteTodo }
})

export const removeAllTodos = (/*todos*/) => ({
  type: DEL_ALL_TODOS,
  payload: {} //{ todos }
})
