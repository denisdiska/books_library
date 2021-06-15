import Actions from '../rootActions'

export const addBook = item => {
  return async dispatch => {
    try {
      dispatch(Actions.books.addNewBook(item))
    } catch (error) {
      dispatch(Actions.books.addMyBooksError(error))
    }
  }
}

export const deleteBook = data => {
  return async dispatch => {
    try {
      dispatch(Actions.books.deleteSelectedBook(data))
    } catch (error) {
      dispatch(Actions.books.deleteSelectedBookError(error))
    }
  }
}
export const editBook = data => {
  return async dispatch => {
    try {
      dispatch(Actions.books.editSelectedBook(data))
    } catch (error) {
      dispatch(Actions.books.editSelectedBookError(error))
    }
  }
}

export default addBook
