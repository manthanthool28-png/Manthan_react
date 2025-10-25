import React, { useState } from 'react';

type Post = {
  id: number;
  title: string;
  image: string;
  likes: number;
  comments: string[];
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [comment, setComment] = useState('');
  const [commentingId, setCommentingId] = useState<number | null>(null);

  const addPost = () => {
    if (!title || !image) return;
    setPosts((prev) => [
      ...prev,
      { id: Date.now(), title, image, likes: 0, comments: [] },
    ]);
    setTitle('');
    setImage('');
  };

  const like = (id: number) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)));
  };

  const addComment = (id: number) => {
    if (!comment) return;
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, comments: [...p.comments, comment] } : p))
    );
    setComment('');
    setCommentingId(null);
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: 16, fontSize: '2rem', fontWeight: 900, color: '#283593' }}>
        Blog
      </h1>

      {/* Add post form */}
      <div className="project-card" style={{ marginBottom: 20, maxWidth: 560, marginInline: 'auto' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: 6, border: '1px solid #d1e3ff', marginBottom: 8 }}
        />
        <input
          type="text"
          placeholder="Image URL (https)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: 6, border: '1px solid #d1e3ff', marginBottom: 8 }}
        />
        <button onClick={addPost} className="contact-btn" style={{ alignSelf: 'flex-start' }}>
          Add Post
        </button>
      </div>

      {/* Posts grid */}
      <div className="projects-grid">
        {posts.map((p) => (
          <article key={p.id} className="project-card blog-card" style={{ maxWidth: 480, marginInline: 'auto' }}>
            <h2 style={{ marginBottom: 8 }}>{p.title}</h2>
            {/* Fixed-size image to avoid full-screen issue */}
            <img
              src={p.image}
              alt={p.title}
              style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8, display: 'block', marginBottom: 8 }}
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                t.onerror = null;
                t.src = 'https://picsum.photos/seed/fallback/800/500';
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <button onClick={() => like(p.id)} className="project-link" style={{ textDecoration: 'none' }}>
                👍 {p.likes}
              </button>
              <button onClick={() => setCommentingId(p.id)} className="project-link" style={{ textDecoration: 'none' }}>
                💬 Comment
              </button>
            </div>
            {commentingId === p.id && (
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment"
                  style={{ flex: 1, padding: '8px', borderRadius: 6, border: '1px solid #d1e3ff' }}
                />
                <button onClick={() => addComment(p.id)} className="contact-btn">
                  Add
                </button>
              </div>
            )}
            <div>
              {p.comments.map((c, i) => (
                <div key={i} style={{ background: '#f1f5f9', padding: '8px', borderRadius: 6, marginBottom: 6 }}>
                  {c}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
