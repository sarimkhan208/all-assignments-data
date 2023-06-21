import {combineReducers, legacy_createStore} from 'redux'
import { reducer as todo_reducer } from './Todo/reducer'
import { reducer as login_reducer } from './Login/reducer'

const root = combineReducers({
    todo : todo_reducer,
    login : login_reducer
})

export const store = legacy_createStore(root)