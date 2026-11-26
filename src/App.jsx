import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Slide from './pages/Home'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <Link className="navbar-brand" to="/">
            My Website
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Slide />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App