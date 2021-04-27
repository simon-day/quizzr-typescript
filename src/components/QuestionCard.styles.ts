import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 700px;
  min-width: 300px;
  background: #ebfeff;
  border-radius: 12px;
  border: 3px solid #0085a3;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
    color: black;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    margin: 5px 0;
    color: #fff;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: 2px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;