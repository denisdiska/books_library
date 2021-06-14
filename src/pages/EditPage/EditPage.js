import React from 'react'

import { EditBookForm } from '../../components'
export default function EditPage(props) {
  const { el } = props?.location?.propsSearch || {}

  return (
    <div>
      <EditBookForm editData={el} />
    </div>
  )
}
