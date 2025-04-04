import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const SlideshowContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 650px;
  margin: auto;
  overflow: hidden;
  background-color: #FFE7C9;
`;

const Slide = styled.div`
  display: ${props => (props.$active ? 'block' : 'none')};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;


const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const Dot = styled.span`
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: ${props => (props.$active ? '#3A693C' : '#D8BB94')};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const slidesData = [
  { src: process.env.PUBLIC_URL + '/assets/slideshow/slideshow1.jpg', alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + '/assets/slideshow/slideshow2.jpg', alt: "Slide 2" },
  { src: process.env.PUBLIC_URL + '/assets/slideshow/slideshow3.jpg', alt: "Slide 3" },
  { src: process.env.PUBLIC_URL + '/assets/slideshow/slideshow4.jpg', alt: "Slide 4" },
  { src: process.env.PUBLIC_URL + '/assets/slideshow/slideshow5.jpg', alt: "Slide 5" },
];

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef(null);

  // Function to start the timer
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slidesData.length);
    }, 7000);
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <SlideshowContainer>
      {slidesData.map((slide, index) => (
        <Slide key={index} $active={index === slideIndex}>
          <img src={slide.src} alt={slide.alt} />
        </Slide>
      ))}
      <DotsContainer>
        {slidesData.map((_, index) => (
          <Dot 
            key={index} 
            $active={index === slideIndex} 
            onClick={() => {
              setSlideIndex(index);
              resetTimer();
            }} 
          />
        ))}
      </DotsContainer>
    </SlideshowContainer>
  );
}

export default Slideshow;
