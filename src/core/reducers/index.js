import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({
  organisation: dashboardReducer
});

export default rootReducer;
