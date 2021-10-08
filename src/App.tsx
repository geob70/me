// import React from 'react';
import MainComponent from "./layouts/MainContainer";
import Nav from "./layouts/Nav/Nav";
import Socials from "./components/socials/Social";
import Email from "./components/socials/Email";
import Main from "./layouts/Container";
import Intro from "./sections/intro/Intro";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/projects";
import ContactMe from "./sections/contact/ContactMe";
import Footer from "./sections/footer/Footer";
import "./App.css";

function App() {
  return (
    <MainComponent>
      <Nav />
      <Main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <ContactMe />
        <Footer />
      </Main>
      <Socials />
      <Email />
    </MainComponent>
  );
}

export default App;
