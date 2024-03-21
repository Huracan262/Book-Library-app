import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addBook} from '../../redux/books/actionCreators'
import createBookWithID from '../../utils/createBookWithID'
import booksData from '../../data/books.json'
import './BookForm.css'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithID({title, author})))
      setTitle('')
      setAuthor('')
    }
  }

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    dispatch(addBook(createBookWithID(randomBook)))
  }

  return (
    <div className="app-block book-form">
      <h2>Добавить книгу</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Название:</label>
          <input type="text" id="title" value={title} onChange={event => setTitle(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="author">Автор:</label>
          <input type="text" id="author" value={author} onChange={event => setAuthor(event.target.value)}/>
        </div>
        <button type="submit">Добавить</button>
        <button type="button" onClick={handleAddRandomBook}>Случайная книга</button>
      </form>
    </div>
  )
}

export default BookForm