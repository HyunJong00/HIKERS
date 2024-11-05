import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  
    return (
      <div style={styles.postList}>
        {posts.map((post, index) => (
          <Post 
            key={index} 
            title={post.title} 
            likes={post.likes} 
            thumbnail={post.thumbnail} 
          />
        ))}
      </div>
    );
  };
  
  // 스타일 정의
  const styles = {
    postList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '10px',
      cursor: 'pointer',
    },
    post: {
      display: 'flex',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },

  };
  
  export default PostList;