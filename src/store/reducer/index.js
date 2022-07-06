import { combineReducers } from '@reduxjs/toolkit'
import franchiseReducer from "./franchiseReducer";

export default combineReducers({
    
    franchise:franchiseReducer,
    
  })