import { useState } from "react";
import { Header } from "../about/style";
import {
  Container,
  WorkTab,
  Tab,
  TabContainer,
  StyledHighlight,
  TabPanel,
} from "./style";

interface Jobs {
  position: string;
  company: string;
  date: string;
  tasks: string[];
  intern?: boolean;
}

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  const experience: Jobs[] = [
    {
      position: "Engineer",
      company: "Chronos",
      date: "Jan 2020 - present",
      tasks: [
        "Cooperated diligently with other IT team members to plan, design, and develop smart solutions.",
        "Transformed existing software to correct errors, upgrade interfaces, and improve efficiency.",
        "Work with different technologies such as JavaScript, TypeScript, React, Node (Adonis), Vue and Redis.",
        "Worked closely with user experience designers and other developers ensure thoughtful and coherent user experiences across applications.",
      ],
    },
    {
      position: "Engineer",
      company: "390Labs",
      date: "Dec 2018 - April 2019",
      intern: true,
      tasks: [
        "Cooperate diligently with other IT team members to plan, design, and develop smart solutions/",
        " Refactored API to isolate and remove bugs, to improve API response time.",
      ],
    },
    {
      position: "Engineer",
      company: "Chronos",
      date: "June 2018 - November 2018",
      intern: true,
      tasks: [
        "Obtained a solid understanding of creating, testing and deploying applications.",
        "Implemented and maintained codes for in-house websites using Vue, CSS, Sass, and JavaScript.",
      ],
    },
  ];

  return (
    <Container>
      <div className="main">
        <Header>Where I've worked</Header>
        <WorkTab>
          <TabContainer>
            <StyledHighlight activeTabId={activeTabId} />
            <Tab isActive={activeTabId === 0} onClick={() => setActiveTabId(0)}>
              Chronos
            </Tab>
            <Tab isActive={activeTabId === 1} onClick={() => setActiveTabId(1)}>
              390Labs
            </Tab>
            <Tab isActive={activeTabId === 2} onClick={() => setActiveTabId(2)}>
              Chronos
            </Tab>
          </TabContainer>
          <TabPanel>
            <h3>
              {experience[activeTabId].position}{" "}
              <span>&nbsp;@&nbsp; {experience[activeTabId].company}</span>
            </h3>
            <p>{experience[activeTabId].date}</p>
            {experience[activeTabId].intern ? (
              <small className="text-xs italic">intern</small>
            ) : null}
            <div className="tasks">
              {experience[activeTabId].tasks.map(
                (task: string, index: number) => {
                  return (
                    <div key={index} className="flex mb-5">
                      <div className="arrow"></div>
                      <div className="col-span-2 text-size">{task}</div>
                    </div>
                  );
                }
              )}
            </div>
          </TabPanel>
        </WorkTab>
      </div>
    </Container>
  );
};

export default Experience;
