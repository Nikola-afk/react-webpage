import React from "react";
import "../components/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <h1 className="projects-h">These are some of my projects</h1>
        <hr />
        <div>
          <section className="project-grid">
            <div>
              <a
                href="https://nikola-afk.github.io/Nikola-Topalovic-Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-1"
              >
                <p>Static Portfolio Webpage ▶▶</p>
              </a>
            </div>
            <div>
              <a
                href="http://www.drustvo-piran.org.rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-2"
              >
                <p>Independent Organization Website ▶▶</p>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Nikola-afk/Tribute"
                target="_blank"
                rel="noopener noreferrer"
                className="project-3"
              >
                <p>Nikola Tesla Tribute Page ▶▶</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Projects;
