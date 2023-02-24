import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <div>
      <h3>{title}</h3>
      <p>{author}</p>

      <button type="button">Remove Button</button>
    </div>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
