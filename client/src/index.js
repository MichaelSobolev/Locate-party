import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Snowfall from 'react-snowfall'

const rootNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      {/* <div style={{width: '100%', height: '100%',background: '#282c34' }}> */}
        <App />
        {/* <Snowfall /> */}
        {/* </div> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootNode
);
