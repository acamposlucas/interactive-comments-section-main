import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-900: hsl(212, 24%, 26%);
    --blue-500: hsl(238, 40%, 52%);
    --blue-300: hsl(239, 57%, 85%);
    --red-500: hsl(358, 79%, 66%);
    --red-300: hsl(357, 100%, 86%);
    --gray-400: hsl(211, 10%, 45%);
    --gray-300: hsl(223, 19%, 93%);
    --gray-100: hsl(228, 33%, 97%);
    --white: hsl(0, 0%, 100%);

    --fw-bold: 700;
    --fw-medium: 500;
    --fw-regular: 400;
    
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 1rem;
  }

  body {
    background-color: var(--gray-100);
    padding: 2rem 1rem;
  }

  body, textarea, input, button {
    font-family: 'Rubik', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export const CommentSection = styled.section`
  display: grid;
  gap: 1rem;
`;
