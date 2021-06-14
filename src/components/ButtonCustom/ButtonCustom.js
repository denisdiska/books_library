import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button } from 'antd'
import { deleteBook } from '../../store/thunk'

export default function ButtonCustom({ props, edit }) {
  const dispatch = useDispatch()
  const { books } = useSelector(({ books }) => ({
    books: books?.myBooks?.list,
  }))

  const removeBook = title => {
    dispatch(deleteBook(books.filter(books => books.title !== title)))
  }
  const el = books.find(el => el.title === props)
  return (
    <>
      {edit && (
        <Link
          to={{
            pathname: `/editpage/${+books.indexOf(el)}`,
            propsSearch: { el },
          }}
        >
          <Button>edit</Button>
        </Link>
      )}
      {!edit && <Button onClick={() => removeBook(props)}>delete</Button>}
    </>
  )
}
