import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GoPerson } from 'react-icons/go';

const Navbar = () => (
  <>
    <div className="nav">
      <div className="titleAndLinks">
        <Link to="/" className="navTitle">Bookstore CMS</Link>
        <ul className="navList">
          <li className="navItem">
            <Link to="/" className="navLink">
              BOOKS
            </Link>
          </li>
          <li className="navItem">
            <Link to="categories" className="navLink">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </div>
      <GoPerson className="navIcon" />
    </div>
  </>
);

export default Navbar;
