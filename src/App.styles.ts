import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/starsbg.jpeg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        color: #fff;
    }

    * {
        box-sizing: border-box;
        font-family: 'Questrial', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Seymour One", sans-serif;
    font-weight: bold;
    font-size: 3.5rem;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(4px 3px #0085a3);
    text-align: center;
  }

  .start,
  .next {
    color: white;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    margin: 20px 0;
    padding: 10px 40px;
    border-radius: 10px;
    background: #f857a6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ff5858,
      #f857a6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ff5858,
      #f857a6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;
