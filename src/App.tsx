// import React from 'react';
import MainComponent from "./layouts/MainContainer";
import Nav from "./layouts/Nav/Nav";
import Socials from "./components/socials/Social";
import Email from "./components/socials/Email";
import Main from "./layouts/Container";
import Intro from "./sections/intro/Intro";
import "./App.css";

function App() {
  return (
    <MainComponent>
      <Nav />
      <Main>
        <Intro id="intro" />
      </Main>
      <Socials />
      <Email />
    </MainComponent>
  );
}

export default App;
