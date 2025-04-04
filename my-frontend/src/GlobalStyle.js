import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #FFF8ED;
    color: #382F2F;
  }

    h1 {
    font-family: 'Abril Fatface', sans-serif;
    font-size: 2rem;   
    letter-spacing: 0.04em;         
    margin: 0;
  }
  
  h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.628rem;
  }
  h3 {
    font-size: 1.3rem;
  }

  .small-serif {
    font-family:'Merriweather Sans', serif;
  }

  section h2,
  section h3,
  section h4,
  section h5,
  section h6 {
    font-family: 'Montserrat', sans-serif;
    color: #39683B;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  section h2 {
    font-size: 1.628rem;
    position: relative;
  }
  
  section h2::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: #A52A2A;
    margin: 0.28em auto 0;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 1em;
    color: #382F2F;
  }

  button, .button {
    display: inline-block;
    background-color: #39683B;
    color: #FFF8ED;
    padding: 0.5em 1em;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    max-width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  button:hover, .button:hover {
    background-color: #FF8C00;
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
    transition: color 0.3s ease;
    color: inherit;
  }
  
  a:not(.button):hover {
    color: #9fb9ee;
  }
  
  .active {
    font-weight: 900;
  }
  
  nav a {
    position: relative;
  }
  
  nav a::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px; 
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 2px; 
    background-color: #9fb9ee;
    transition: transform 0.3s ease;
  }
  
  nav a:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  .page-enter {
  opacity: 0;
  transform: translateY(20px); /* Removed scale(0.95) */
  will-change: opacity, transform;
  }
  .page-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 1200ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .page-exit {
    opacity: 1;
    transform: translateY(0);
    will-change: opacity, transform;
  }
  .page-exit-active {
    opacity: 0;
    transform: translateY(-20px); /* Removed scale(1.05) */
    transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 1200ms cubic-bezier(0.22, 1, 0.36, 1);
  }

`;

export default GlobalStyle;