import React from 'react';
import './Education.css'; // Import the CSS file

function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Bachelor of Information Technology (BSC IT)</h5>
                <h6 className="card-text">Mumbai University, Graduated: 2024, S.M. Shetty College (Powai)</h6>
                <p className="card-text">
                  Achieved a solid foundation in information technology and programming concepts. <strong>CGPI:</strong> 6.33
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Science</h5>
                <h6 className="card-text">College IDUBS, Graduated: 2021</h6>
                <p className="card-text">
                  Studied science and mathematics with a keen interest in technology. <br /> <strong>Result:</strong> 69%
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">High School</h5>
                <h6 className="card-text">Saraswati English High School, Graduated: 2019</h6>
                <p className="card-text">
                  Studied science and mathematics with a keen interest in technology. <br /> <strong>Result:</strong> 67%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
