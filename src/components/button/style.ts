import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem 1rem;
  color: #64ffda;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #64ffda;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  width: fit-content !important;

  &:hover {
    background: rgba(100,255,218,0.1);
  }
`;

export default Container;
