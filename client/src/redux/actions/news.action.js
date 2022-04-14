import { CREATE_ARTICLE, SET_ARTICLES, } from '../types'

const URL = process.env.REACT_APP_API_ADRESS;

export const createNews = (newArticle) => async (dispatch) => {
  // Создание одной новости и запись в бд и состояние
  await fetch(`${URL}/news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(newArticle),
  });

  dispatch({
    type: CREATE_ARTICLE,
    payload: { newArticle },
  });
};

export const getNews = () => async (dispatch) => {
  // Получает все посты из бд и перезаписывает состояние ими!
  const response = await fetch(`${URL}/news`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const articles = await response.json();
  dispatch({ type: SET_ARTICLES, payload: articles })
}

