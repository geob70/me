import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 100vh;

  div {
    width: 80%;
  }

  span,
  p {
    color: #64ffda;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace,
      sans-serif;
  }

  p {
    color: silver;
    margin-top: 30px;
  }

  h1 {
    color: #ccd6f6;
    font-weight: 600;
    line-height: 1.1;
    font-size: clamp(40px, 8vw, 80px);
    font-family: "Noto Sans", sans-serif;
  }

  h2 {
    font-size: clamp(40px, 8vw, 80px);
    margin-top: 10px;
    color: #8892b0;
    font-family: "Noto Sans", sans-serif;
    line-height: 0.9;
  }

  * {
    margin: 20px 0px;
  }
`;
