import { Card, Container, CardContainer } from "./styles";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { projects, ProjectProps } from "./data";

const Projects = () => {
  return (
    <Container id="projects">
      <h3>My Projects</h3>
      <span className="span">view the archive</span>
      <CardContainer>
        {projects.map((project: ProjectProps, index: number) => {
          return (
            <Card key={index}>
              <div className="top">
                <FolderOpenIcon
                  style={{ color: "#64ffda", fontSize: "40px" }}
                />
                <div>
                  <a
                    href={project.githubUrl}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                  {project.url ? (
                    <a
                      href={project.url}
                      aria-label="GitHub"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LanguageIcon
                        className="icon"
                        style={{ marginLeft: "5px" }}
                      />
                    </a>
                  ) : null}
                </div>
              </div>
              <div>
                <h2>{project.title}</h2>
                <div className="project-description">
                  <p>{project.desc}</p>
                </div>
              </div>
              <div className="tech">
                {project.tools.map((tool: string, index: number) => {
                  return <span key={index}>{tool}</span>;
                })}
              </div>
            </Card>
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Projects;
