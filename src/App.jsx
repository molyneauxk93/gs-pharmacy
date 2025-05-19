import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importing bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';

//importing components 
import Nav from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

//importing pages 
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Store from './pages/Store/Store.jsx'
import Contact from './pages/Contact/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>

    </>
  )
}

export default App
