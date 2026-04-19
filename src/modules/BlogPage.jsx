import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../lib/sanityClient';

const query = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt,
  excerpt
}`;

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client.fetch(query)
      .then(data => { setPosts(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p className="text-secondary">Loading...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;
  if (!posts.length) return <p className="text-secondary">No posts yet.</p>;

  return (
    <>
      <h2 className="mb-4" style={{color:'#ffe38d'}}>Blog</h2>
      <div className="d-flex flex-column gap-3">
        {posts.map(post => (
          <div className="card" key={post.slug}>
            <div className="card-body">
              <h5 className="card-title mb-1">
                <Link to={`/blog/${post.slug}`} style={{color:'#F2C6A0', textDecoration:'none'}}>{post.title}</Link>
              </h5>
              <p className="text-secondary small mb-2">{new Date(post.publishedAt).toLocaleDateString()}</p>
              {post.excerpt && <p className="card-text mb-0">{post.excerpt}</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogPage;
