import {
  SET_USER,
  SET_USER_ERROR,
  USER_LOGOUT,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
  ADD_INFO,
  ADD_SESSION,
  SET_USER_ID,
  CLEAR_USER_DATA,
  SET_USER_DATA,
  SET_CHOSEN_PROFILE,
} from "../types";

const url = process.env.REACT_APP_API_ADRESS;
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

export const createSession = (userInfo) => async (dispatch) => {

  dispatch(getUserDataByGoogleId(userInfo.googleId))
  dispatch({
    type: ADD_SESSION,
    payload: userInfo,
  });
};

export const getUserIdByGoogleId = (google_id) => async (dispatch) => {

  const response = await fetch(`http://localhost:5000/players/userId/${google_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
  const user_id = await response.json()
  if (user_id) {
    dispatch({
      type: SET_USER_ID,
      payload: { user_id },
    });
  } else {
    console.log('Юзер не найден')
  }
}

export const getUserDataByGoogleId = (google_id, isCurrentUser = true) => async (dispatch) => {
  const type = isCurrentUser ? SET_USER_DATA : SET_CHOSEN_PROFILE
  const response = await fetch(`http://localhost:5000/players/user/${google_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
  const userData = await response.json()
  const isEmpty = Object.values(userData).includes(null)

  if (isEmpty) {
    userData.isFilled = false
  } else {
    userData.isFilled = true
  }

  dispatch({
    type,
    payload: userData,
  })
}


export const getUserProfileInfoById = (user_id) => async (dispatch) => {

  const response = await fetch(`http://localhost:5000/users/getProfileInfo/userId/${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
  const userData = await response.json()
  const isEmpty = Object.values(userData).includes(null)

  if (isEmpty) {
    userData.isFilled = false
  } else {
    userData.isFilled = true
  }
  dispatch({
    type: SET_CHOSEN_PROFILE,
    payload: userData,
  })
}

export const addInfoFetch = (value) => async (dispatch) => {
  const response = await fetch(`http://localhost:5000/users/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(value),
  })

}

export const addInfo = (value) => {
  return {
    type: ADD_INFO,
    payload: value,
  };
};
