import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'

const rootNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootNode
);
