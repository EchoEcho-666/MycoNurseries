// src/components/Slideshow.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SlideshowContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 700px;
  margin: auto;
  overflow: hidden;
  background-color: #FFE7C9;
`;

const Slide = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  background-color: ${props => (props.active ? '#3A693C' : '#D8BB94')};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const slidesData = [
  { src: "assets/slideshow/slideshow1.jpg", alt: "Slide 1" },
  { src: "assets/slideshow/slideshow2.JPG", alt: "Slide 2" },
  { src: "assets/slideshow/slideshow3.JPG", alt: "Slide 3" },
  { src: "assets/slideshow/slideshow4.JPG", alt: "Slide 4" },
  { src: "assets/slideshow/slideshow5.JPG", alt: "Slide 5" },
];

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SlideshowContainer>
      {slidesData.map((slide, index) => (
        <Slide key={index} active={index === slideIndex}>
          <img src={slide.src} alt={slide.alt} />
        </Slide>
      ))}
      <DotsContainer>
        {slidesData.map((_, index) => (
          <Dot key={index} active={index === slideIndex} onClick={() => setSlideIndex(index)} />
        ))}
      </DotsContainer>
    </SlideshowContainer>
  );
}

export default Slideshow;