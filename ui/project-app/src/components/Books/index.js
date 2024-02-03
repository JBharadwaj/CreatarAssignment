import {Component} from 'react'


import BookItem from '../BookItem'

import './index.css'

const booksApiUrl = 'http://localhost:3001/books'

class Books extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.getBooks()
  }

  setBooks = (formattedData) => {
    this.setState({
      books: formattedData,
    })
  }

  getBooks = async () => {
    
    const response=await fetch(booksApiUrl, {
        method: 'GET'
    })
    const fetchedData = await response.json()
    const formattedData = fetchedData.map(book => ({
      title: book.title,
      id: book.id,
      description: book.description,
      price:book.price,
      author:book.author,
    }))
    this.setBooks(formattedData)
  }

  renderBooksList = () => {
    const {books} = this.state

    return (
      <div className="book-list-container">
        {books.map(book => (
          <BookItem bookData={book} key={book.id} />
        ))}
      </div>
    )
  }


  render() {

    return (
      <div className="home-route-container">
        <div className="teams-list-container">
          {this.renderBooksList()}
        </div>
      </div>
    )
  }
}

export default Books