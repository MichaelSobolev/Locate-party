import { CREATE_ARTICLE, SET_ARTICLES, UPDATE_ARTICLE, } from '../types'

export const newsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case CREATE_ARTICLE: {
      const { newArticle } = payload
      return [...state, newArticle]
    }
    case SET_ARTICLES: {
      const articles = payload
      return articles
    }
    case UPDATE_ARTICLE: {
      const article = payload
      return state.filter(el => el !== article)
    }
    default: {
      return state
    }
  }
}

