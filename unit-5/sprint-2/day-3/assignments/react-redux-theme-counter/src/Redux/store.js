import {combineReducers, legacy_createStore} from 'redux'
import { themeReducer } from './themeReducer'
import { counterReducer } from './counterReducer'


const root = combineReducers({
    theme : themeReducer,
    counter : counterReducer 
})

export const store = legacy_createStore(root)