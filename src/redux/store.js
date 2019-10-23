import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import updateLoopReducer from './reducers'

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    updateLoopReducer,
    preloadedState,
    applyMiddleware(loggerMiddleware)
  )
}
