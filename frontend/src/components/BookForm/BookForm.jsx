import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addBook} from '../../redux/books/actionCreators'
import {v4 as uuidv4} from 'uuid'
import './BookForm.css'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (title && author) {
      const book = {
        title,
        author,
        id: uuidv4()
      }
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Добавить книгу</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Название:</label>
          <input type="text" id="title" value={title} onChange={event => setTitle(event.target.value)} />
        </div>
        <div>
          <label htmlFor="author">Автор:</label>
          <input type="text" id="author" value={author} onChange={event => setAuthor(event.target.value)} />
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  )
}

export default BookForm