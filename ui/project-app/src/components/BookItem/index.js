

import './index.css'

const BookItem = props => {
  const {bookData} = props
  const {title,author,description,price} = bookData

  return (
      <div className="book-container">
        <h1 className="heading">{title}</h1>
        <p className="author">{author}</p>
        <p className="description">{description}</p>
        <p className="price">INR {price}</p>
      </div>
  )
}

export default BookItem