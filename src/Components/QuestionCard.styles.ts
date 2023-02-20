import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: rgba(95, 34, 65, 0.8);
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid rgba(95, 34, 65, 1);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    
   p {
    font-size: 1.3rem;
    color: #fff;
    max-width: 500px;
   }         
    `;

   type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;}

    export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    
    :hover {
      opacity: 0.8;
      }
      
    button {
      cursor: pointer;
      user-select: none;
      margin: 5px 0;
      font-size: 1rem;
      width: 100%;
      height: 40px;
      background: ${({ correct, userClicked }) => 
        correct
          ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
          : !correct && userClicked
          ? 'linear-gradient(90deg, #ff5656, #c16868)'
          : 'linear-gradient(90deg, #2b80cf, #6eafb4)'};
      border: 2px solid #fff;
      box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      color: #fff;
      text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }

      `