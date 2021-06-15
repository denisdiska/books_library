import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { Input, Button, Form, Space } from 'antd'

import { editBook } from '../../store/thunk'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

export default function EditBookForm({ editData }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form] = Form.useForm()
  const [editing, setEditing] = useState(false)
  const { books } = useSelector(({ books }) => ({
    books: books.myBooks.list,
  }))

  const routeChange = () => {
    let path = `/`
    history.push(path)
  }

  const onFinish = values => {
    const date = new Date()
    const publish_date = date.toISOString().slice(0, 10)
    const editedBook = books.map(el =>
      editData.title === el.title ? { ...values, publish_date, id: editData.id } : el
    )

    dispatch(editBook(editedBook))

    form.resetFields()
    setEditing(true)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Space size={-8} wrap>
        <Button type="primary" onClick={routeChange}>
          back
        </Button>
      </Space>
      <Form
        {...layout}
        name="addNewBook"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        initialValues={{ ...editData }}
      >
        <Form.Item label="Book title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="Author" name="author">
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {editing && <Redirect to="/login" />}
    </div>
  )
}
