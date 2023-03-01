import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Form from './Form';

function Book() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const categories = useSelector((state) => state.categories.categories);
  const [selected, setSelected] = useState();
  const dispatch = useDispatch();
  const selectHandler = (e) => {
    setSelected(e.target.value);
    // console.log(bookstore);
  };
  const booklibrary = bookstore.length ? (
    <ul>
      <label htmlFor="categories">
        Filterd by :categories
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
                {book.title}
                <p>
                  {book.author}
                </p>
                <button
                  id={book.id}
                  onClick={() => dispatch(removeBook(book.id))}
                  type="button"
                >
                  Remove
                </button>
              </li>
            );
          }
          if (selected === 'All') {
            return (
              <li key={book.item_id}>
                {book.title}
                <p>
                  {book.author}
                </p>
                <p>
                  {book.category}
                </p>
                <p />
                <button
                  id={book.item_id}
                  onClick={() => dispatch(removeBook(book.item_id))}
                  type="button"
                >
                  Remove

                </button>
              </li>
            );
          }

          if (selected === undefined) {
            return (
              <li key={book.item_id}>
                {book.title}
                <p>
                  {book.author}
                </p>
                <p>
                  {book.category}
                </p>
                <p />
                <button
                  id={book.item_id}
                  onClick={() => dispatch(removeBook(book.item_id))}
                  type="button"
                >
                  Remove

                </button>
              </li>
            );
          }

          return false;
        })
    }
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
