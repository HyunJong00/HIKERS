import React from 'react';
import PostList from '../components/common/Post/PopularPostList';
import post1 from "../assets/images/community/image1.svg";
import post2 from "../assets/images/community/image2.svg";
import post3 from "../assets/images/community/image3.svg";
import post4 from "../assets/images/community/image4.svg";


const postsData = [
    { title: "포스트 1", likes: 20, thumbnail: post1 },
    { title: "포스트 2", likes: 35, thumbnail: post2 },
    { title: "포스트 3", likes: 12, thumbnail: post3 },
    { title: "포스트 4", likes: 50, thumbnail: post4 },
    { title: "포스트 5", likes: 5, thumbnail: post1 },
    { title: "포스트 6", likes: 15, thumbnail: post1 },
  ];
  
  function TestPage() {
    return (
      <div>
        <h1>커뮤니티 개념글</h1>
        <PostList posts={postsData} />
      </div>
    );
  }
  
export default TestPage;