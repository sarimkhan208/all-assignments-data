import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { reducer as authReducer } from './Auth/reducer'
import { reducer as bugReducer} from './Bugs/reducer'

const rootReducer = combineReducers({
    authReducer,
    bugReducer

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))