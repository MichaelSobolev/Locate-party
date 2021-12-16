import {
  SET_USER,
  SET_USER_ERROR,
  USER_LOGOUT,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
  ADD_INFO,
  ADD_SESSION,
  MODIFY_SESSION,
  SET_USER_ID,
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

export const createSession = (data) => async (dispatch) => {
  console.log(
    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    data.id,
    data.displayName,
    data.photos[0].value
  );
  const response = await fetch(`http://localhost:5000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      id: data.id,
      name: data.displayName,
      image: data.photos[0].value,
    }),
  });
  console.log("RESULT ####################################");
  const result = await response.json();
  dispatch({
    type: ADD_SESSION,
    payload: result,
  });
  dispatch(
    getUserIdByGoogleId(result.id)

  )
};

export const getUserIdByGoogleId = (google_id) => async (dispatch) => {
  console.log('getUserIdByGoogleId')
  const response = await fetch(`http://localhost:5000/players/user/${google_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
  const user_id = await response.json()
  if (user_id) {
    console.log('TRUE ID', user_id)
    dispatch({
      type: SET_USER_ID,
      payload: { user_id },
    });
  } else {
    console.log('Юзер не найден')
  }
}
export const addInfoFetch = (value) => async (dispatch) => {
  const response = await fetch(`http://localhost:5000/users/db`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(value),
  })
  const id = await response.json()
  console.log('addInfoFetch ID: ', id)
  dispatch({
    type: SET_USER_ID,
    payload:  id,
  })  // dispatch(addInfo({ ...value, ...id }))

}

export const addInfo = (value) => {
  return {
    type: ADD_INFO,
    payload: value,
  };
};
