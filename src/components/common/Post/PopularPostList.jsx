// PopularPostList.jsx
import React from 'react';
import Post from './Post';

// 포스트 목록 컴포넌트
const PopularPostList = ({ posts }) => {
  const postStyles = {
    width: '150px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    padding: '10px',
    textAlign: 'center',
    marginRight: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={styles.postListContainer}> {/* 스크롤이 적용될 컨테이너 */}
      <div style={styles.postList}>
        {posts.slice(0, 5).map((post, index) => (
          <Post 
            key={index} 
            title={post.title} 
            likes={post.likes} 
            thumbnail={post.thumbnail} 
            customStyle={postStyles} // 스타일을 props로 전달
          />
        ))}
      </div>
    </div>
  );
};

// 스타일 정의
const styles = {
  postListContainer: {
    overflowX: 'auto', // 가로 스크롤 활성화
    width: '100%',
  },
  postList: {
    display: 'flex',
    whiteSpace: 'nowrap',
    padding: '10px',
    minWidth: 'max-content', // 콘텐츠 너비를 유지하여 압축 방지
  }
};

export default PopularPostList;