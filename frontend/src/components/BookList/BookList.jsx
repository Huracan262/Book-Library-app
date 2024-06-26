import {useDispatch, useSelector} from 'react-redux'
import {BsBookmarkStarFill, BsBookmarkStar} from 'react-icons/bs'
import {deleteBook, toggleFavorite} from '../../redux/books/actionCreators'
import './BookList.css'

function BookList() {
  const books = useSelector(state => state.books)
  const dispatch = useDispatch()

  const handleDeleteBook = id => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = id => {
    dispatch(toggleFavorite(id))
  }

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
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite
                    ? <BsBookmarkStarFill className="star-icon" />
                    : <BsBookmarkStar className="star-icon" />
                  }
                </span>

                <button type="button" onClick={()=> handleDeleteBook(book.id)} >Удалить это гавно</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList