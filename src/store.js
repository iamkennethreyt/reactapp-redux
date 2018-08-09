import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/users-reducer';
import productsReducer from './reducers/products-reducer';

const allReducer = combineReducers({
    products: productsReducer,
    user: userReducer
})

const allEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

export const store = createStore(
    allReducer,
    {
        products:[{name: 'iphone'}],
        user: 'Michael'
    },
    allEnhancers
);