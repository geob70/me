import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;

  .main {
    width: fit-content;
  }
`;

export const WorkTab = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px;
  border-radius: 4px;
  background: #64ffda;
  transform: translateY(
    calc(${(props: { activeTabId: number }) => props.activeTabId * 42 + "px"})
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
`;

export const Tab = styled.div`
  text-decoration: none;
  cursor: pointer;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0px 20px 2px;
  border-left: 2px solid #112240;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#112240" : "transparent"};
  color: ${(props: { isActive: boolean }) =>
    props.isActive ? "#64ffda" : "#8892b0"};
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 13px;
  text-align: left;
  white-space: nowrap;

  &:hover,
  &:focus {
    background: #112240;
  }
`;

export const TabPanel = styled.div`
  margin-left: 20px;
  max-width: 500px;
  height: 400px;

  small {
    padding: 1px 3px;
    border-radius: 4px;
    color: #ccd6f6;
  }

  h3 {
    margin-bottom: 2px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    color: #ccd6f6;

    span {
      color: #64ffda;
    }
  }

  p {
    color: #ccd6f6;
  }

  .tasks {
    margin-top: 25px;
    color: #ccd6f6;

    .text-size {
      font-size: 14px;
      letter-spacing: 1px;
    }
  }

  .arrow:before {
    content: "▹";
    left: 0;
    color: #64ffda;
    font-size: 12px;
    line-height: 12px;
    margin-right: 20px;
  }
`;
