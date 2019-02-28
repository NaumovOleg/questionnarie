import React from 'react';
import ReactDOM from 'react-dom';
import './questionnarie-react-main.scss';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import App from './App';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import * as serviceWorker from './serviceWorker';
import productsReducer from  './store/reducers/products';
import parcedProductsReducer from  './store/reducers/parcedProducts';
import questionsRedicer from './store/reducers/questions';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const rootReducer = combineReducers ( {
    products:productsReducer,
    parcedProducts:parcedProductsReducer,
    questions:questionsRedicer
} );
const logger = store => {
    return next => {
        return action => {
            const result = next ( action );
            return result;
        };
    };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore ( rootReducer, composeEnhancers ( applyMiddleware ( logger, thunk ) ) );
const app = (

    <Provider store={store}>
            <App />
    </Provider>

);
ReactDOM.render(app, document.getElementById('questionnarie'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
