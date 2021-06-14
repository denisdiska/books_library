import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { editBook } from '../../store/thunk'

export default function EditBookForm({ editData }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [editing, setEditing] = useState(false)
  const { books } = useSelector(({ books }) => ({
    books: books.myBooks.list,
  }))

  let date = new Date()
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'numeric', day: '2-digit' })
  const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)
  const initialFormState = { author: editData.author, publish_date: `${day}-${month}-${year}`, title: editData.title }
  const [book, setBook] = useState(initialFormState)

  const routeChange = () => {
    let path = `/`
    history.push(path)
  }

  const handleInputChange = event => {
    const { name, value } = event.currentTarget
    setBook({ ...book, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!book.title || !book.author) return

    dispatch(editBook(books.map(el => (initialFormState.title === el.title ? book : el))))

    setEditing(true)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Book title</label>
        <input type="text" name="title" value={book.title} onChange={handleInputChange} />
        <label>Author</label>
        <input type="text" name="author" value={book.author} onChange={handleInputChange} />
        <button>edit book</button>
      </form>
      {editing && <Redirect to="/login" />}
      <button onClick={routeChange}>to books</button>
    </div>
  )
}
