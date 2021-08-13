import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  postReducer,
  specialtyReducer,
  courseReducer,
  teacherReducer,
  classReducer
} from './reducers';

export default createStore (
  combineReducers({
    // Reducers
    postReducer,
    specialtyReducer,
    courseReducer,
    teacherReducer,
    classReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
