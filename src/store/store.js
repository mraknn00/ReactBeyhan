import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'

const initalState = {}

const middleware = [thunk]

export const store = configureStore(
  { reducer: rootReducer },
  initalState,
  composeWithDevTools(applyMiddleware(...middleware)),
)