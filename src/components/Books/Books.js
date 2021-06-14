import React from 'react'
import { useSelector } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Table } from 'antd'
// import { Table, Button } from 'antd'

// import { deleteBook } from '../../store/thunk'

import { ButtonCustom } from '../ButtonCustom'
// import { Book } from './Book'

const columns = [
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    filters: [
      {
        text: `asd`,
        value: 'asd',
      },
      {
        text: 'Екатерина Рондель',
        value: 'Екатерина Рондель',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => {
      // console.log(this)
      return record?.author?.indexOf(value) === 0
    },
    sorter: (a, b) => b.title.localeCompare(a.title),
    sortDirections: ['descend'],
  },

  {
    title: 'Book name',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => b.title.localeCompare(a.title),
    sortDirections: ['descend'],
  },
  {
    title: 'Publish date',
    dataIndex: 'publish_date',
    key: 'publish_date',
    sorter: (a, b) => new Date(a.publish_date) - new Date(b.publish_date),
  },
  {
    title: ' ',
    dataIndex: 'title',
    render: dataIndex => (
      <div>
        <ButtonCustom props={dataIndex} edit={true} />
        <ButtonCustom props={dataIndex} />
      </div>
    ),
  },
]

export default function Books() {
  // const dispatch = useDispatch()
  const { books } = useSelector(({ books }) => ({
    books: books?.myBooks?.list,
  }))

  const dataSource = books.map(item => ({ ...item, key: item.title + item.author }))

  // const removeBook = title => {
  //   dispatch(deleteBook(books.filter(books => books.title !== title)))
  // }

  return <Table dataSource={dataSource} columns={columns} pagination={false} />
}

// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { deleteBook } from '../../store/thunk'

// import { Book } from './Book'
// export default function Books() {
//   const dispatch = useDispatch()
//   const { books } = useSelector(({ books }) => ({
//     books: books?.myBooks?.list,
//   }))

//   const removeBook = title => {
//     dispatch(deleteBook(books.filter(books => books.title !== title)))
//   }

//   return (
//     <div>
//       {books?.map((el, ind) => (
//         <div key={ind}>
//           <Book el={el} ind={ind} removeBook={removeBook} />
//         </div>
//       ))}
//     </div>
//   )
// }
