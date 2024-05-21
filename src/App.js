import './App.css';
import { Routes, Route} from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Katalog from './components/Katalog';
import { Link } from 'react-router-dom';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path="/books/:id" element={<BookDetails/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/katalog" element={<Katalog/>} />
      </Routes>
      <Footer/>
      
      
    </div>
  );
}



export default App;
