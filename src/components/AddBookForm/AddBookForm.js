import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addBook } from '../../store/thunk'

export default function AddBookForm() {
  const dispatch = useDispatch()

  let date = new Date()
  let dateNow = date.toISOString().slice(0, 10)

  const initialFormState = { author: '', publish_date: `${dateNow}`, title: '' }

  const [book, setBook] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.currentTarget
    setBook({ ...book, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!book.title || !book.author) return

    dispatch(addBook(book))

    setBook(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Book title</label>
      <input type="text" name="title" value={book.title} onChange={handleInputChange} />
      <label>Author</label>
      <input type="text" name="author" value={book.author} onChange={handleInputChange} />
      <button>Add new book</button>
    </form>
  )
}
