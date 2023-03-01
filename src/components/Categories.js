import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const Categories = useSelector(({ category }) => category.categories);
  const categoryHandler = () => {
    setShow(false);
    dispatch(checkStatus());
  };
  return (
    <div>
      {show && <button hidden={!show} type="button" onClick={categoryHandler}>Check status</button>}
      {
      show ? (<p />) : (
        <ul>
          {
      Categories.map((category) => (
        <li key={category.id}>
          {category.category}
        </li>
      ))
    }
        </ul>
      )

     }
    </div>
  );
}

export default Categories;
