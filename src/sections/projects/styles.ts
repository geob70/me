import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 50px 0px;
  padding: 50px 0px;

  h3 {
    font-size: clamp(24px, 5vw, 32px);
    margin: 0px 0px 10px;
    font-weight: 600;
    color: #ccd6f6;
    line-height: 1.1;
    font-family: "Noto Sans", sans-serif;
  }

  .span {
    color: #64ffda;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    text-decoration-skip-ink: auto;
    font-size: 14px;
    cursor: pointer;
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: #64ffda;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const CardContainer = styled.div`
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  width: clamp(300px, 65%, 70%);
`;

export const Card = styled.div`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: 4px;
  background-color: #112240;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-family: "Noto Sans", sans-serif;

  &:hover {
    transform: translateY(-7px);
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    width: 100%;
  }

  h2 {
    margin: 0px 0px 10px;
    color: #ccd6f6;
    font-size: 22px;
    line-height: 1.1;
    font-weight: 600;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .project-description {
    color: #a8b2d1;
    font-size: 15px;
    margin-bottom: 50px;
  }

  .tech span {
    display: inline-block;
    margin: 3px 5px 3px 0;
    font-family: Inconsolata, monospace;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 3px;
    color: #007bff;
    border: 1px solid #007bff;
    background: 0 0;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  }
  .icon {
    color: #eeeeee;
    cursor: pointer;
  }

  .icon:hover {
    color: #64ffda;
  }
`;
