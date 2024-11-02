import React from 'react';
import PopularPostList from '../components/common/Post/PopularPostList';
import post1 from "../assets/images/community/image1.svg";
import post2 from "../assets/images/community/image2.svg";
import post3 from "../assets/images/community/image3.svg";
import post4 from "../assets/images/community/image4.svg";
import PostList from '../components/common/Post/PostList';
import Footer from '../components/common/Footer';
import { GlobalColor } from '../styles/GlobalStyles';

const postsData = [
    { title: "포스트 1", likes: 20, thumbnail: post1 },
    { title: "포스트 2", likes: 35, thumbnail: post2 },
    { title: "포스트 3", likes: 12, thumbnail: post1 },
    { title: "포스트 4", likes: 50, thumbnail: post4 },
    { title: "포스트 5", likes: 5, thumbnail: post4 },
    { title: "포스트 6", likes: 15, thumbnail: post4 },
];

function CommunityPage() {
  const button = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '30px',
    margin: 'auto auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  };
  const text = {
    fontSize:"13px", borderRadius:"99px", border:'1px solid #EAEDF4', padding:'3px', margin:'5px'
  };
  return (
    <div style={{ overflowX: 'auto', maxWidth: '100%', position:'relative', height:'100%',paddingBottom: '60px',}}> {/* 가로 스크롤 설정 */}
      <div>
        <h2 style={{fontSize:"18px", margin:"10px"}}>실시간 개념글 TOP</h2>
        <PopularPostList posts={postsData} />
        <span style={button}>더보기</span>
      </div>
      <hr style={{ border: '4px solid #F4F7F9', width: '100%' }} />
      <div>
      <span style={text}>나의글 </span>
      <span style={text}>개념글 </span>
      <span style={{backgroundColor:'black',color:'white',fontSize:"13px", borderRadius:"99px", border:'1px solid #EAEDF4', padding:'5px', margin:'5px'}}>자유게시판 </span>
      <span style={text}>등산용품 </span>
        <PostList posts={postsData.slice(0, 2)} />
      </div>
      <div style={{position:'absolute',bottom:'0'}}>
      <Footer activeItem={"user"}/>
      </div>
    <div>

      </div>
    </div>
  );
}

export default CommunityPage;