import {useDispatch, useSelector} from 'react-redux'
import './BookList.css'
import {deleteBook} from '../../redux/books/actionCreators'

function BookList() {
  const books = useSelector(state => state.books)
  const dispatch = useDispatch()

  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>

      {books.length === 0
      ? <p>Пусто</p>
      : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} - <strong>{book.author}</strong>
              </div>

              <div className="book-actions">
                <button type="button" onClick={event => dispatch(deleteBook(book))} >Удалить это гавно</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList