import {
  Container,
  Header,
  ProfileContainer,
  Content,
  Floater,
  ListItemGrid,
  ImageContainer
} from "./style";
import ListItem from "../../components/list/ListItem";

const About = () => {
  return (
    <Container id="about">
      <div>
        <Header>
          About Me
          <Floater>...love what you do, do what you love...</Floater>
        </Header>
        <ProfileContainer>
          <Content>
            HI! My name is <a href="/#">Sylvester</a>, I{" "}
            <strong>
              love <div>😍</div>
            </strong>{" "}
            building things to help people or solving problems.


            <p>Here are some of the technologies I haved worked with:</p>
            <ListItemGrid className="grid grid-cols-3 gap-4">
              <ListItem item={"Java"} />
              <ListItem item={"Typescript"} />
              <ListItem item={"Javascript"} />
              <ListItem item={"Node.js"} />
              <ListItem item={"React"} />
              <ListItem item={"Vue"} />
              <ListItem item={"Python"} />
            </ListItemGrid>
          </Content>
          <ImageContainer>
            <img src="/logo1.jpg" alt="" />
            <div></div>
          </ImageContainer>
        </ProfileContainer>
      </div>
    </Container>
  );
};

export default About;
