import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0ProviderWithNavigate } from '../src/Auth0/auth0Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
