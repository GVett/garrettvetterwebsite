import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './modules/HomePage.jsx';
import ContactPage from './modules/ContactPage.jsx'
import GalleryPage from './modules/GalleryPage.jsx'
import TopicsPage from './modules/TopicsPage.jsx';
import './App.css'

function App() {
  const [ movie, setMovie ] = useState([]);
  return (
    <>
      <header>
          <h1>Garrett Vetter</h1>
      </header>
      <Router>
          <Navigation />
          <main>
              <section>
                  <Routes>
                      <Route path="/" element={<HomePage />}></Route>
                      <Route path="/contact" element={<ContactPage />}></Route>
                      <Route path="/gallery" element={<GalleryPage />}></Route>
                      <Route path="/topics" element={<TopicsPage />}></Route>
                  </Routes>
              </section>
          </main>
      </Router>
      <footer>
          <p>&copy; {new Date().getFullYear()} Garrett Vetter</p>
      </footer>
    </>
  )
}

export default App