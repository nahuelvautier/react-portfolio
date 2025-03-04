
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Curriculum from './components/Curriculum/Curriculum';
import Contact from './components/Contact-Form/Contact';
import ScrollTopButton from './components/Scroll-Top-Button/Scroll-Top-Button';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/curriculum-Vitae' element={<Curriculum />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      <ScrollTopButton />
    </>
  )
}

export default App
