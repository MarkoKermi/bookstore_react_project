import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooks, fetchBooks } from '../redux/books/api';
import Form from './Form';

function Book() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const status = useSelector((state) => state.books.status);
  const categories = useSelector((state) => state.categories.categories);
  const [selected, setSelected] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
    if (status === 'succeeded') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const selectHandler = (e) => {
    setSelected(e.target.value);
  };
  const booklibrary = bookstore.length ? (
    <ul>
      <div className="library">
        <label htmlFor="categories">
          Filterd by :
          {'  '}
          <select
            name="categories"
            defaultValue="All"
            onInput={selectHandler}
          >
            <option defaultValue="All" value="All">All</option>
            {

              categories.map((category) => (
                <option
                  key={category.id}
                  value={category.category}
                >
                  {category.category}

                </option>
              ))
        }
          </select>
        </label>
        {
        bookstore.map((book) => {
          if (book.category === selected) {
            return (
              <li key={book.id}>
                <div className="book_elements">
                  <div className="School-of">
                    {book.title}
                  </div>
                  <p>
                    {book.author}
                  </p>
                  <div className="allBtn">
                    <button
                      className="btn_book"
                      id={book.id}
                      onClick={() => dispatch(deleteBooks(book.id))}
                      type="button"
                    >
                      Remove
                    </button>
                    <button
                      className="btn_book"
                      type="button"
                    >
                      Comment

                    </button>
                    <button
                      className="btn_book"
                      type="button"
                    >
                      Edit

                    </button>
                  </div>
                </div>
                <div className="right-side">
                  <div className="complete-graph">
                    <div className="oval" />
                    <div className="complete-percent">
                      <span className="percentage">75%</span>
                      <p className="completed">Completed</p>
                    </div>
                  </div>
                </div>
                <div className="progressInfo">
                  <p className="chapterOne"> CURRENT CHAPTER</p>
                  <p className="chapter"> Chapter 10</p>
                  <button
                    className="btn"
                    type="button"
                  >
                    UPDATE PROGRES

                  </button>
                </div>
              </li>
            );
          }
          if (selected === 'All') {
            return (
              <li key={book.id}>
                <div className="book_elements">
                  <p className="category_p">
                    {book.category}
                  </p>
                  <div className="School-of">
                    {book.title}
                  </div>
                  <p>
                    {book.author}
                  </p>

                  <p />
                  <div className="allBtn">
                    <button
                      className="btn_book"
                      id={book.id}
                      onClick={() => dispatch(deleteBooks(book.id))}
                      type="button"
                    >
                      Remove

                    </button>
                    <button
                      className="btn_book"
                      type="button"
                    >
                      Comment

                    </button>
                    <button
                      className="btn_book"
                      type="button"
                    >
                      Edit

                    </button>
                  </div>
                </div>
                <div className="right-side">
                  <div className="complete-graph">
                    <div className="oval" />
                    <div className="complete-percent">
                      <span className="percentage">75%</span>
                      <p className="completed">Completed</p>
                    </div>
                  </div>
                </div>
                <div className="progressInfo">
                  <p className="chapterOne"> CURRENT CHAPTER</p>
                  <p className="chapter"> Chapter 10</p>
                  <button
                    className="btn"
                    type="button"
                  >
                    UPDATE PROGRES

                  </button>
                </div>
              </li>
            );
          }

          if (selected === undefined) {
            return (
              <li key={book.id}>
                <div className="book_elements">
                  <p className="category_p">
                    {book.category}
                  </p>
                  <div className="School-of">
                    {book.title}
                  </div>
                  <p>
                    {book.author}
                  </p>

                  <p />
                  <div className="allBtn">
                    <button
                      className="btn_book"
                      id={book.id}
                      onClick={() => dispatch(deleteBooks(book.id))}
                      type="button"
                    >
                      Remove

                    </button>
                    <button
                      className="btn_book"
                      type="button"
                    >
                      Comment

                    </button>
                    <button
                      className="btn_book"
                      type="button"
                    >
                      Edit

                    </button>
                  </div>
                </div>
                <div className="right-side">
                  <div className="complete-graph">
                    <div className="oval" />
                    <div className="complete-percent">
                      <span className="percentage">75%</span>
                      <p className="completed">completed</p>
                    </div>
                  </div>
                </div>
                <div className="progressInfo">
                  <p className="chapterOne"> CURRENT CHAPTER</p>
                  <p className="chapter"> Chapter 10</p>
                  <button
                    className="btn"
                    type="button"
                  >
                    UPDATE PROGRES

                  </button>
                </div>

              </li>
            );
          }

          return false;
        })
    }
      </div>
    </ul>
  ) : (
    <p>The box is empty</p>
  );
  return (
    <div>
      <Form />
      {booklibrary}
    </div>
  );
}

export default Book;
