import './App.css'

import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/header'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Products from './pages/Products'

function App() {

    return (
        <>

            <Header />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/products" element={<Products />} />

                <Route path="/services" element={<Services />} />

                <Route path="/contact" element={<Contact />} />

            </Routes>

            <Footer />

        </>
    )
}

export default App