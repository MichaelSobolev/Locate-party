import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducers/root.reducer'
import { initialState } from './state'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
