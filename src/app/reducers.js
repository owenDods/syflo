import { combineReducers } from 'redux';

import app from './AppReducer';
import selection from '../selection/SelectionReducer';

export default combineReducers({ app, selection });
