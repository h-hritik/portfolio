import React from "react";
import pdf from "../documents/resume... U.pdf";
import passImage from "../images/pass02.JPG";
import "./About.css";

function About() {
  return (
    <div>
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>
                <i>
                  Hi, <strong>I'm Hritik.</strong> I'm passionate about web
                  development and enjoy creating intuitive and dynamic web
                  experiences.
                </i>
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={passImage}
                alt="Hritik Maurya"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </section>
      <center>
        <a href={pdf} download className="btn btn-primary my-2">
          <b>Download Resume</b>
        </a>
      </center>
    </div>
  );
}

export default About;
