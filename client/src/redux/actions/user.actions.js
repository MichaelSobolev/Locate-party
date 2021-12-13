import {
  SET_USER,
  SET_USER_ERROR,
  USER_LOGOUT,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
} from '../types';

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5002/login`, {
      //TODO Добавить .env для API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
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
      payload: { error: 'Неверный логин или пароль' },
    });
  }
};

export const userLogout = () => async (dispatch) => {
  //TODO Добавить .env для API
  const response = await fetch(`http://localhost:5002/logout`);

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
        error: 'Ты не прав/а, попробуй еще раз :(',
      },
    });
  }
};
