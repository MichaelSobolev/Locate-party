import { SET_ROOM_DATA } from "../types";

const URL = process.env.REACT_APP_API_ADRESS;
export const addPendingPlayer = ({ post_id, user_id }) => async (dispatch) => {
  // Добавление игрока в ожидание
  console.log('====', post_id, user_id, '====')

  await fetch(`${URL}/players/pending/${post_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ user_id }),
  });

};

export const acceptPlayer = ({ post_id, user_id }) => async (dispatch) => {
  // Перенос  участника из комнаты ожидания
  console.log('ogviewagnfoinhervpoiqepgiaaaaaaaa')
  await fetch(`${URL}/players/pending/accept/${post_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ user_id }),
  });

};

export const declinePlayer = ({ post_id, user_id }) => async (dispatch) => {
  // Удаление участника из очереди

  await fetch(`${URL}/players/pending/decline/${post_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ user_id }),
  });
};

export const removePlayer = ({ post_id, user_id }) => async (dispatch) => {
  // Удаление участника из комнаты

  await fetch(`${URL}/players/${post_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ user_id }),
  });
};

export const getPlayersByPost = (post_id) => async (dispatch) => {
  // ИГроки в посте

  const response = await fetch(`${URL}/players/${post_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  });
  const payload = await response.json()
  dispatch({ type: SET_ROOM_DATA, payload })
};

