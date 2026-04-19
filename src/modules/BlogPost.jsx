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

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <article>
      <Link to="/blog">← Back to Blog</Link>
      <h2>{post.title}</h2>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      <PortableText value={post.body} />
    </article>
  );
}

export default BlogPost;
