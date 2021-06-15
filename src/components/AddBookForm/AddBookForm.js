import React from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { addBook } from '../../store/thunk'

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

export default function AddBookForm() {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log(values)
    if (values.title && values.author) {
      const id = Date.now()
      const date = new Date()
      const publish_date = date.toISOString().slice(0, 10)
      dispatch(addBook({ ...values, publish_date, id }))
      form.resetFields()
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="addNewBook"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      style={{ marginTop: '16px' }}
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
  )
}
