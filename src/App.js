import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import './App.css';
import Book from './components/Book';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/" element={<Book />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
