import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Heading />
        <Projects />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
