import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore'
import { Provider } from 'react-redux';
import App from './components/app/app'
import './index.css';


const store = configureStore();


render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

