// Post.jsx
import React from 'react';

const Post = ({ title, likes, thumbnail, customStyle }) => {
  return (
    <div style={customStyle}> {/* customStyle을 style에 적용 */}
      <img src={thumbnail} alt={title} style={styles.thumbnail} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.likes}>좋아요 {likes}</p>
    </div>
  );
};

const styles = {
  thumbnail: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  title: {
    fontSize: '14px',
    margin: '8px 0',
    color: '#333',
  },
  likes: {
    fontSize: '12px',
    color: '#888',
  },
};

export default Post;