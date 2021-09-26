import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .div {
    text-align: center;
    width: clamp(300px, 50%, 65%);

    *:nth-child(3) {
      margin: 0px auto;
    }
  }

  h2 {
    font-size: clamp(40px, 5vw, 60px);
    margin: 0px 0px 10px;
    font-weight: 600;
    color: #ccd6f6;
    line-height: 1.1;
    font-family: "Noto Sans", sans-serif;
  }

  p {
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    color: silver;
    margin: 40px 0px;
  }
`;
