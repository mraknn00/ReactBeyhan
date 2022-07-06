import { combineReducers } from '@reduxjs/toolkit'
import franchiseReducer from "./franchise.Reducer";

export default combineReducers({
    
    franchise:franchiseReducer,
    
  })