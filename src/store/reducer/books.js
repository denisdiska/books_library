import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer'

import { PROGRESS_TYPE } from '../../constants/progressType'

export class booksReducer extends ImmerReducer {
  // addNewBook(item, persistantState) {
  //   this.draftState.myBooks.list.unshift(item)
  // }
  addNewBook(item) {
    this.draftState.myBooks = {
      list: [item, ...this.draftState.myBooks.list],
      progress: PROGRESS_TYPE.SUCCESS,
    }
  }

  addMyBooksError(error) {
    this.draftState.myBooks = {
      ...this.draftState.myBooks,
      error,
      progress: PROGRESS_TYPE.ERROR,
    }
  }

  deleteSelectedBook(data) {
    this.draftState.myBooks = {
      list: data,
      progress: PROGRESS_TYPE.SUCCESS,
    }
  }
  deleteSelectedBookError(error) {
    this.draftState.myBooks = {
      ...this.draftState.myBooks,
      error,
      progress: PROGRESS_TYPE.ERROR,
    }
  }

  editSelectedBook(data) {
    this.draftState.myBooks = {
      list: [...data],
      progress: PROGRESS_TYPE.SUCCESS,
    }
  }
  editSelectedBookError(error) {
    this.draftState.myBooks = {
      ...this.draftState.myBooks,
      error,
      progress: PROGRESS_TYPE.ERROR,
    }
  }
}

export const books = createReducerFunction(booksReducer, {
  myBooks: {
    list: [],
    progress: PROGRESS_TYPE.IDLE,
  },
})

export const BooksActions = createActionCreators(booksReducer)
export default BooksActions
