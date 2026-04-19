import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './modules/HomePage.jsx';
import ContactPage from './modules/ContactPage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import ResumePage from './modules/ResumePage.jsx';
import BlogPage from './modules/BlogPage.jsx';
import BlogPost from './modules/BlogPost.jsx';
import Navigation from './modules/Navigation.jsx';

function App() {
  return (
    <>
      <header className="site-header py-3 px-4 d-flex align-items-center justify-content-between">
        <h1>Garrett Vetter</h1>
      </header>
      <Router>
        <Navigation />
        <main className="container py-5 flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
      </Router>
      <footer className="site-footer py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div className="d-flex gap-4">
          <a href="https://www.linkedin.com/in/garrett-vetter-gdv/">LinkedIn</a>
          <a href="https://github.com/GVett">GitHub</a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} Garrett Vetter</p>
      </footer>
    </>
  );
}

export default App;
