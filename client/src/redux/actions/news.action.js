import { CREATE_ARTICLE, SET_ARTICLES, UPDATE_ARTICLE, } from '../types'

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
  // console.log('fetch articles')
  console.log(articles);
  dispatch({ type: SET_ARTICLES, payload: articles })
}


// export const getArticle = (id) => async (dispatch) => {
//   // Получение содержимого 1го поста
//   try {
//     const response = await fetch(`${URL}/news/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include',
//     });
//     const article = await response.json();
//     dispatch({ type: SET_CURRENT_POST, payload: article });
//   } catch (err) {
//     console.log('Fetching err');
//   }
// };



// export const updateNews = (id, payload) => async (dispatch) => {
//   // Обновление содержимого 1го поста
//   const response = await fetch(`${URL}/news/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//     body: JSON.stringify(payload),
//   });
//   const news = await response.json();
//   dispatch({ type: UPDATE_POST, payload: news })
// };

// export const deleteNews = (id) => async (dispatch) => {
//   // Обновление содержимого 1го поста
//   const response = await fetch(`${URL}/news/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//   });
//   const news = await response.json();
//   console.log(news);
//   // dispatch({ type: DELETE_POSTS, payload: news })
// };




