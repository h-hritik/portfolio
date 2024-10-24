import React from 'react';
import passImage from '../images/cerbg.gif';
function Certification() {
  return (
    <>
   <section
  id="certifications"
  className="py-5 my-2"
  style={{
    backgroundImage: `url(${passImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>


        <div className="container">
          <h2>Certifications</h2>
          <div className="row">
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Javascript</h5>
                  <p id="color">Learn full concept of javascript from Simplilearn website</p>
                  <a href="C:\Users\hrith\OneDrive\Desktop\portfolio\frontend\Javascript certificate .pdf" download className="btn btn-primary">Download</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">React</h5>
                  <p id="color" className="card-text" style={{ color: 'black' }}>Full concepts of react</p>
                  <a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjkyMjUyM18xNzIwNzQ2Nzc4LnBuZyIsInVzZXJuYW1lIjoiSHJpdGlrIE1hdXJ5YSAifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_6922523_1720746778.png&_branch_match_id=1340437101041536963&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1g9zc4nIS84PtfROAgCQp7IEIwAAAA%3D%3D" download className="btn btn-primary">Download</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">C++</h5>
                  <p id="color" className="card-text" style={{ color: 'black'}}>Full concepts of object oriented programming</p>
                  <a href="https://simpli-web.app.link/e/w0Hp8jXBPNbhttps://simpli-web.app.link/e/w0Hp8jXBPNbhttps://simpli-web.app.link/e/w0Hp8jXBPNb" download className="btn btn-primary">Download</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">MySQL</h5>
                  <p id="color" className="card-text" style={{ color: 'black' }}>Full concept of SQL</p>
                  <a href="https://simpli-web.app.link/e/BJKxhvLBPNb" download className="btn btn-primary">Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certification;
