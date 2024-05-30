import './App.css';
import { Routes, Route} from 'react-router-dom';
import BookDetails from './components/BookDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Katalog from './components/Katalog';
import { Link } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import LoginForm from './components/zaloguj';
import RegisterForm from './components/zarejestruj';
import ReadBooks from './components/MojaPolka'; //importy elementów (const) z innych plików
import ToReadBooks from './components/TBR';
import BestRated from './components/Najlepsze';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path="/books/:id" element={<BookDetails/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/katalog" element={<Katalog/>} />
        <Route path="/zaloguj" element={<LoginForm/>} />
        <Route path="/zarejestruj" element={<RegisterForm/>} />
        <Route path="/mojapolka" element={<ReadBooks/>} /> {/*dodane ładowanie elementów (const) z innych plików*/}
        <Route path="/tbr" element={<ToReadBooks/>} />
        <Route path='/najlepsze' element={<BestRated/>} />
      </Routes>
      <Footer/>
      
      
    </div>
  );
}



export default App;
