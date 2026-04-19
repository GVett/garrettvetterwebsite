import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import client from '../lib/sanityClient';

const query = `*[_type == "post" && slug.current == $slug][0] {
  title,
  publishedAt,
  body
}`;

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(query, { slug }).then(data => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <p className="text-secondary">Loading...</p>;
  if (!post) return <p className="text-danger">Post not found.</p>;

  return (
    <article style={{maxWidth:'680px'}}>
      <Link to="/blog" className="text-secondary text-decoration-none small d-inline-block mb-4">← Back to Blog</Link>
      <h2 style={{color:'#ffe38d'}}>{post.title}</h2>
      <p className="text-secondary small mb-4">{new Date(post.publishedAt).toLocaleDateString()}</p>
      <div className="lh-lg">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}

export default BlogPost;
