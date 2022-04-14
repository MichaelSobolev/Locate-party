
import { CREATE_POST, SET_POSTS, SET_CURRENT_POST, UPDATE_POST, SET_SYSTEMS, SET_SYSTEM_NAMES, SET_MY_GAMES, DELETE_MY_GAME, SET_MY_GAMES_AS_PlAYER } from '../types';

const URL = process.env.REACT_APP_API_ADRESS;


export const getPosts = () => async (dispatch) => {
  // Получает все посты из бд и перезаписывает состояние ими!
  try {
    const response = await fetch(`${URL}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const posts = await response.json();
    dispatch({ type: SET_POSTS, payload: posts })
  } catch (err) {
    console.log(err)
  }
}

export const getMyPosts = (googleId) => async (dispatch) => {
  // Получает все посты из бд и перезаписывает состояние ими!

  try {
    const response = await fetch(`${URL}/posts/myPosts/${googleId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const posts = await response.json();
    dispatch({ type: SET_MY_GAMES, payload: posts })
  } catch (err) {
    console.log(err)
  }
}

export const getMyPostsAsPlayer = (googleId) => async (dispatch) => {
  // Получает все посты из бд и перезаписывает состояние ими!

  try {
    const response = await fetch(`${URL}/posts/myPosts/asPlayer/${googleId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const gameRelationsData = await response.json();
    const posts = gameRelationsData.map(el => el.post_to_player)
    dispatch({ type: SET_MY_GAMES_AS_PlAYER, payload: posts })
  } catch (err) {
    console.log(err)
  }
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
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  const post = await response.json();
  dispatch({ type: UPDATE_POST, payload: post })
  dispatch({ type: SET_CURRENT_POST, payload: post })

};

export const deletePost = (googleId, post_id) => async (dispatch) => {
  // Обновление содержимого 1го поста
  await fetch(`${URL}/posts/${googleId}/${post_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  dispatch({ type: DELETE_MY_GAME, payload: post_id })
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

export const getSystems = () => async (dispatch) => {
  const response = await fetch(`${URL}/posts/systems`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const systems = await response.json();
  dispatch({ type: SET_SYSTEMS, payload: systems })
};

export const getSystemsForSelector = () => async (dispatch) => {
  const response = await fetch(`${URL}/posts/systems/onlyNames`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const systems = await response.json();
  dispatch({ type: SET_SYSTEM_NAMES, payload: systems })
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
