import {applyMiddleware, combineReducers, createStore} from 'redux'
import categoriesReducer from './categoriesReducer'
import  thunkMiddleware  from 'redux-thunk'

const reducers = combineReducers({
    categories: categoriesReducer,
})

export const store = createStore(reducers,applyMiddleware(thunkMiddleware))