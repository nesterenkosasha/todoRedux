import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer';
import logger from './middlewares/logger'

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default (initialState = {}) => {
    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(logger),
            (window.devToolsExtension && !IS_PRODUCTION) ? window.devToolsExtension() : f => f,
        ),
    );
}