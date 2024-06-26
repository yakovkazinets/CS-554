import {combineReducers} from '@reduxjs/toolkit';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
  todos: todoReducer,
  users: userReducer
});

export default rootReducer;
