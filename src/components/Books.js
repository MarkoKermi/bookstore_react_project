import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const list = [
    {
      id: 1,
      title: '5am Club',
      author: 'Robin Sharma',
    },
    {
      id: 2,
      title: 'Me, Pink Panter',
      author: 'Olivera Kirkovich',
    },
  ];
  return (
    <>
      <>
        {list.map((each) => (
          <Book key={each.id} title={each.title} author={each.author} />
        ))}
      </>
      <Form />

    </>
  );
};

export default Books;
