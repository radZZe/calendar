import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store.js'
import { BrowserRouter } from 'react-router-dom'


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} dispatch={store.dispatch.bind(store)} state={state} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
  rerenderEntireTree(store.getState());
});
