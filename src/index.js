import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfigureStore from './store/ConfigureStore';
import { Provider } from 'react-redux';
<<<<<<< HEAD

const storeInstance = ConfigureStore();
=======
>>>>>>> 6a4ba4289232af620e834e581a5c3218764735de

const storeInstance = ConfigureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
