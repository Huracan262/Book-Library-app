import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addBook} from '../../redux/books/actionCreators'
import {v4 as uuidv4} from 'uuid'
import booksData from '../../data/books.json'
import './BookForm.css'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (title && author) {
      const book = {
        id: uuidv4(),
        title,
        author,
        isFavorite: false
      }
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    }
  }

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    const randomBookWithID = {
      ...randomBook,
      id: uuidv4(),
      isFavorite: false
    }

    dispatch(addBook(randomBookWithID))
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