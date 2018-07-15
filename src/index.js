import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import warehouseReducer from './reducers/WarehouseReducer';
import filterReducer from './reducers/FilterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  warehouse:warehouseReducer,
  filters:filterReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));
registerServiceWorker();
;
