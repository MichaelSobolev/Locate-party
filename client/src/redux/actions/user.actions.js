import {
  SET_USER,
  SET_USER_ERROR,
  USER_LOGOUT,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
  ADD_USER,
} from "../types";
const url = 'http://localhost:5001'
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${url}/login`, {
      //TODO Добавить .env для API
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    dispatch({
      type: SET_USER,
      payload: { user: result },
    });
  } catch (err) {
    dispatch({
      type: SET_USER_ERROR,
      payload: { error: "Неверный логин или пароль" },
    });
  }
};

export const userLogout = () => async (dispatch) => {
  //TODO Добавить .env для API
  const response = await fetch(`${url}/logout`);

  if (response.ok) {
    dispatch({
      type: USER_LOGOUT,
    });
  }
};

export const validateUser = (current, reference) => (dispatch) => {
  if (String(current) === reference) {
    dispatch({
      type: VALIDATE_SUCCESS,
    });
  } else {
    dispatch({
      type: VALIDATE_ERROR,
      payload: {
        error: "Ты не прав/а, попробуй еще раз :(",
      },
    });
  }
};

export const createUser = (data) => async (dispatch) => {
  const response = await fetch(`${url}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log('--------------->', result)
  dispatch({
    type: ADD_USER,
    payload: { user: result },
  });
};
