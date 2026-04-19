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
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!posts.length) return <p>No posts yet.</p>;

  return (
    <>
      <h2>Blog</h2>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            <span> — {new Date(post.publishedAt).toLocaleDateString()}</span>
            {post.excerpt && <p>{post.excerpt}</p>}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BlogPage;
