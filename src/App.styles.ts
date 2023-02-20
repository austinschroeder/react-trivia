import styled, {createGlobalStyle} from "styled-components";
import BGImage from "./images/canyon.jpeg"

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;}

    body {
      background-image: url(${BGImage});
      height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0;
      padding: 0 20px;
      display: flex;
      justify-content: center;
    }
    
    * {
      font-family: Titillium Web, sans-serif;
      box-sizing: border-box;
    }
    `

    export const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;

      > p { 
        color: #fff;
      }

      .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
      }

      h1 {
        font-family: Poppins, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f);
        background-size: 100%;
        background-clip: text;
        font-size: 70px;
        filter: drop-shadow(2px 2px #0085a3);
        font-weight: 400;
        margin: 20px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        text-align: center;
        @media (max-width: 600px) {
        font-size: 40px;
  }
        

      }

      .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #87f);
        padding: 0 40px;
        height: 40px;
        margin: 20px 0;
        font-size: 1rem;
        border-radius: 20px;
        border: 2px solid #87f;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      }

      .start {
        max-width: 200px;
      }
    `