import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');
  const bookstore = useSelector((state) => state.books.bookstore);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const addBookHandler = (e) => {
    if (title !== '' && author !== '') {
      e.preventDefault();
      const book = {
        item_id: `item${bookstore.length + 1}`,
        title,
        author,
        category,
      };
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="Title">
          Book Title
          <input
            required
            type={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="Author">
          Author
          <input
            required
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label htmlFor="catagories">
          <select
            name="catagories"
            required
            defaultValue="Fiction"
            onInput={(e) => setCategory(e.target.value)}
          >
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
        <button type="submit" onClick={addBookHandler}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
