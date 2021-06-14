import { combineReducers } from 'redux'

import { books } from './reducer/books'

const rootReducer = {
  books,
}

export default combineReducers(rootReducer)
