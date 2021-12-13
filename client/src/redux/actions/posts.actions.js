import { CREATE_POST, SET_POSTS, SET_CURRENT_POST } from '../types';

const URL = `http://localhost:5000`;

export const getPosts = () => async (dispatch) => {
  // Получает все посты из бд и перезаписывает состояние ими!
  // console.log(312412412, `${URL}/posts/`)
  const response = await fetch(`${URL}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const posts = await response.json();
  // console.log('fetch posts')
  console.log(posts);
  dispatch({ type: SET_POSTS, payload: posts })
}


export const getPost = (id) => async (dispatch) => {
  // Получение содержимого 1го поста
  try {
    const response = await fetch(`${URL}/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const post = await response.json();
    console.log(post);
    dispatch({ type: SET_CURRENT_POST, payload: post });
  } catch (err) {
    console.log('Fetching err');
  }
};

export const createPost = (newPost) => async (dispatch) => {
  // Создание 1го поста и запись в бд и состояние
  await fetch(`${URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(newPost),
  });

  dispatch({
    type: CREATE_POST,
    payload: { newPost },
  });
};

export const updatePost = (id, payload) => async (dispatch) => {
  // Обновление содержимого 1го поста
  const response = await fetch(`${URL}/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  const post = await response.json();
  console.log(post);
  // dispatch({ type: UPDATE_POSTS, payload: post })
};

export const deletePost = (id) => async (dispatch) => {
  // Обновление содержимого 1го поста
  const response = await fetch(`${URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const post = await response.json();
  console.log(post);
  // dispatch({ type: DELETE_POSTS, payload: post })
};

export const addSystem = () => async (dispatch) => {
  await fetch(`${URL}/posts/system`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ system: 'D&D' }),
  });
};

export const addMockUser = () => async (dispatch) => {
  await fetch(`${URL}/auth/mock`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ system: 'D&D' }),
  });
};
