import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="site-nav px-4 py-1 d-flex flex-wrap gap-1">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/resume">Resume</Link>
      <Link className="nav-link" to="/gallery">Gallery</Link>
      <Link className="nav-link" to="/blog">Blog</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;
