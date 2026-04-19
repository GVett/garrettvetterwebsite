import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './modules/HomePage.jsx';
import ContactPage from './modules/ContactPage.jsx'
import GalleryPage from './modules/GalleryPage.jsx'
import ResumePage from './modules/ResumePage.jsx'
import BlogPage from './modules/BlogPage.jsx'
import BlogPost from './modules/BlogPost.jsx'
import Navigation from './modules/Navigation.jsx';
import './App.css'

function App() {
  return (
    <>
      <header>
          <h1>Garrett Vetter</h1>
          <a href="https://www.linkedin.com/in/garrett-vetter-gdv/">LinkedIn</a>
          <a href="https://github.com/GVett">GitHub</a>
      </header>
      <Router>
          <Navigation />
          <main>
              <section>
                  <Routes>
                      <Route path="/" element={<HomePage />}></Route>
                      <Route path="/contact" element={<ContactPage />}></Route>
                      <Route path="/gallery" element={<GalleryPage />}></Route>
                      <Route path="/resume" element={<ResumePage />}></Route>
                      <Route path="/blog" element={<BlogPage />}></Route>
                      <Route path="/blog/:slug" element={<BlogPost />}></Route>
                  </Routes>
              </section>
          </main>
      </Router>
      <footer>
          <a href="https://www.linkedin.com/in/garrett-vetter-gdv/">LinkedIn</a>
          <a href="https://github.com/GVett">GitHub</a>
          <p>&copy; {new Date().getFullYear()} Garrett Vetter</p>
      </footer>
    </>
  )
}

export default App