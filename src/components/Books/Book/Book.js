import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({ removeBook, el, ind }) {
  const { title, publish_date, author } = el

  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{publish_date}</p>
      <button onClick={() => removeBook(title)}>delete</button>
      <Link
        to={{
          pathname: `/editpage/${+ind}`,
          propsSearch: { el },
        }}
      >
        <button>edit</button>
      </Link>
      <hr />
    </div>
  )
}

// React from 'react'
// import { Link } from 'react-router-dom'

// export default function Book({ removeBook, el, ind }) {
//   const { title, publish_date, author } = el

//   return (
//     <div>
//       <p>{title}</p>
//       <p>{author}</p>
//       <p>{publish_date}</p>
//       <button onClick={() => removeBook(title)}>delete</button>
//       <Link
//         to={{
//           pathname: `/editpage/${+ind}`,
//           propsSearch: { el },
//         }}
//       >
//         <button>edit</button>
//       </Link>
//       <hr />
//     </div>
//   )
// }
