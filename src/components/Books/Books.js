import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { ButtonCustom } from '../ButtonCustom'

export default function Books() {
  const { books } = useSelector(({ books }) => ({
    books: books?.myBooks?.list,
  }))

  const columns = [
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
      filters: books.reduce((acc, { author }) => {
        if (!acc.find(item => item.value === author)) {
          acc.push({ text: author, value: author })
        }
        return acc
      }, []),
      onFilter: (value, record) => record?.author?.indexOf(value) === 0,
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

  const dataSource = books.map(({ id, ...rest }) => ({ ...rest, key: id }))

  return <Table dataSource={dataSource} columns={columns} pagination={false} />
}
