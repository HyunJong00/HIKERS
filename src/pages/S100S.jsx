import React from "react";
import backgroundimage from '../assets/splash/splash.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import styled from "styled-components";


function S100S (){
  const navigate = useNavigate();

  useEffect(() => {
  const timer = setTimeout(() => {
    navigate('/J100S'); 
  }, 1500);

  return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Screen/>
  );
};

export default S100S;

const Screen = styled.div`
    width: 360px;
    height: 800px;
    background-image: url(${backgroundimage});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;