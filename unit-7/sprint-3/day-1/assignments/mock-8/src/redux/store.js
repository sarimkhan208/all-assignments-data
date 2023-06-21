import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { reducer as authReducer } from './auth/reducer'
import { reducer as  questionsReducer} from './questions/reducer'

const rootReducer = combineReducers({
    authReducer,
    questionsReducer

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))