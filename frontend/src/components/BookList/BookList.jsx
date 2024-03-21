import {useSelector} from 'react-redux'
import './BookList.css'

function BookList() {
  const books = useSelector(state => state.books)

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
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList