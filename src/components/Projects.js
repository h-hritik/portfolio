import React, { useState } from "react";
import passImage from "../images/bg15.jpg";
import Image from "../images/React news.png";
import Image3 from "../images/image3.png";
import passImage2 from "../images/textconverter.png";
import "./Projects.css"; // Ensure this file is created

function Projects() {
  const [showMore, setShowMore] = useState(false);
  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <section id="projects" className="py-5 project-bg my-2">
        <div className="container">
          <h2 id="h2">Projects</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow project-card">
                <img src={passImage} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Dental Clinic System</h5>
                  <p className="card-text">
                    The Dental Clinic Management System (DCMS) is a robust
                    software solution crafted using HTML/CSS for frontend
                    design, Bootstrap for responsive layout, Java (servlet, JSP)
                    for backend logic, and MySQL for database management. It is
                    tailored to streamline the daily operations of dental
                    clinics...
                    {showMore && (
                      <span>
                        {" "}
                        providing a comprehensive suite of tools to manage
                        patient information, appointments, treatments, billing,
                        and administrative tasks seamlessly, taking feedback
                        within a unified platform.
                      </span>
                    )}
                  </p>
                  <button
                    onClick={toggleReadMore}
                    className="btn btn-secondary"
                  >
                    {showMore ? "Read Less" : "Read More"}
                  </button>
                  <a
                    href="https://vzcwvq.csb.app/Loginhtml.html"
                    className="btn btn-primary ml-2"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow project-card my-2">
                <img
                  src={passImage2}
                  className="card-img-top"
                  alt="Project 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Text Converter</h5>
                  <p className="card-text">
                    Text converter - we can perform operations on text like
                    uppercase, lowercase, color change. The application is built
                    in React.
                  </p>
                  <a
                    href="https://text-converter-rouge.vercel.app/"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow project-card my-2">
                <img
                  src={Image3}
                  className="card-img-top"
                  alt="Project 3"
                />
                <div className="card-body">
                  <h5 className="card-title">iNoteBook app</h5>
                  <p className="card-text">
                    iNoteBook is an application where we can create multiple
                    notes with proper font editing and notes are stored on a
                    MongoDB server. We can create, update, and delete notes, and
                    we have a login page with proper authentication. The
                    application is built in React, Node.js, and MongoDB.
                  </p>
                  <a
                    href="https://i-note-book-app-nine.vercel.app/"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="card shadow project-card my-2">
                <img src={Image} className="card-img-top" alt="Project 4" />
                <div className="card-body">
                  <h5 className="card-title">React News App</h5>
                  <p className="card-text">
                    The website fetches news with the help of APIs, and you can
                    choose multiple fields like science, entertainment, general,
                    sports, etc. The application is built in React.
                  </p>
                  <a
                    href="https://react-news-aihjjuth9-hritik-mauryas-projects.vercel.app/"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
