import React from 'react';
import PopularPostList from '../components/common/Post/PopularPostList.jsx';
import post1 from "../assets/images/community/image1.svg";
import post2 from "../assets/images/community/image2.svg";
import post4 from "../assets/images/community/image4.svg";
import PostList from '../components/common/Post/PostList.jsx';
import Footer from '../components/common/Footer.jsx';
import Header from '../components/header/Header.js';

const postsData = [
    { title: "북한산 꿀팁!", likes: 2003, thumbnail: post1 },
    { title: "응봉산 등반 인증", likes: 305, thumbnail: post2 },
    { title: "청계산 난이도 질문", likes: 102, thumbnail: post1 },
    { title: "등린이 뜻", likes: 500, thumbnail: post4 },
    { title: "백암산 등산코스", likes: 50, thumbnail: post4 },
    { title: "포스트 6", likes: 105, thumbnail: post4 },
];

function C300S() {
  const [buttonSelect, setButtonSelect] = React.useState('자유게시판');
  const handleButtonClick = (buttonName) => {
    setButtonSelect(buttonName);
  };


  const button = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    width: '90%',
    height: '30px',
    margin: 'auto auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  };
  const text = {
    fontSize:"13px", 
    borderRadius:"99px", 
    border:'1px solid #EAEDF4', 
    padding:'3px', 
    margin:'5px',
    cursor: 'pointer',
  };
  return (
    <div style={{maxWidth: '100%', position:'relative', height:'100%',paddingBottom: '60px',}}> {/* 가로 스크롤 설정 */}
      <div style={{margin:'16px'}}>
        <Header/>
        <h2 style={{fontSize:"18px"}}>실시간 개념글 TOP</h2>
        <PopularPostList posts={postsData} />
        <button style={button}>더보기</button>
      </div>
      <hr style={{ border: '4px solid #F4F7F9', width: '100%' }} />
      <div>
      <button
        onClick={() => handleButtonClick('나의글')}
        style={buttonSelect === '나의글' ? { ...text, backgroundColor: 'black', color: 'white' } : text}
      >
        나의글
      </button>
      <button
        onClick={() => handleButtonClick('개념글')}
        style={buttonSelect === '개념글' ? { ...text, backgroundColor: 'black', color: 'white' } : text}
      >
        개념글
      </button>
      <button
        onClick={() => handleButtonClick('자유게시판')}
        style={buttonSelect === '자유게시판' ? { ...text, backgroundColor: 'black', color: 'white' } : text}
      >
        자유게시판
      </button>
      <button
        onClick={() => handleButtonClick('등산용품')}
        style={buttonSelect === '등산용품' ? { ...text, backgroundColor: 'black', color: 'white' } : text}
      >
        등산용품
      </button>
        <PostList posts={postsData.slice(0, 4)} />
      </div>
      <div style={{ position: 'sticky', bottom: '0px', display:'flex',justifyContent:'center'}}>
      <Footer activeItem={"user"} />
      </div>
    <div>

      </div>
    </div>
  );
}

export default C300S;