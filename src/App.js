import React from "react";
import "./App.css";
import img from "./img/IMG.jpeg";
import conclusion from "./img/conclusion.png";
import flowchart from "./img/flowchart.png";
import Code from "./components/Code";
import Output from "./components/Output"

const App = () => {
  return (
    <div id="page-top">
     
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Ronak Patel</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={img}
              alt=""
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Flowchart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
              Tools and Languages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                CODE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                OUTPUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">
                CONCLUSION
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div className="w-100">
            <h1 className="mb-0">
              Abstract
              {/* <span className="text-primary"> Patel</span> */}
            </h1>
            {/* <div className="subheading mb-5">
              600 Epic Way · San Jose, CA 95134 · (669) 285-9198 ·
              <a href="mailto:p.ronak0000@gmail.com">p.Ronak0000@gmail.com</a>
            </div> */}
            <p className="lead mb-5">
              <ul>
              <li>Trying to predict the stock market is an enticing prospect to data scientists motivated not
              so much as a desire for material gain, but for the challenge. We see the daily up and
              downs of the market and imagine there must be patterns we, or our models, can learn in
              order to beat all those day traders with business degrees.</li>
              <li>Linear regression is a very simple approach for supervised learning, which widely
                  entertains statistical learning method that is used to predict a quantitative response Y
                  from the predictor variable X. Linear Regression is made with an assumption that
                  there’s a linear relationship between X and Y.</li>
              <li> In our case X is our stock data and Y is the
                  prediction vector. In this project we are going to use lot of libraries which will be used
                  for different operation while dealing with the date like PANDAS, FBPROPHET,
                  NUMPY,PYTRENTS, MATPLOTLIB and the most important quandl.</li>
              </ul>
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ronniepatel/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/Ronnie434/project_2/tree/master">
                <i className="fab fa-github" />
              </a>
              {/* <a href="/">
                <i className="fab fa-twitter" />
              </a>
              <a href="/">
                <i className="fab fa-facebook-f" />
              </a> */}
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div className="w-100">
            <h2 className="mb-5">Flowchart</h2>
            <img className="flowchart" src={flowchart} alt=""/>
           
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div className="w-100">
            <h2 className="mb-5">Tools and Languages</h2>
              <h4>Tools</h4>
              <li>quandl 3.3.0</li>
              <li>matplotlib 2.1.1</li>
              <li>numpy 1.14.0</li>
              <li>fbprophet 0.2.1</li>
              <li>pystan 2.17.0</li>
              <li>pandas 0.22.0</li>
              <li>pytrends 4.3.0</li>
              <br></br>
              <br></br>
              <h4>Language</h4>
              <li>Python 3.7</li>
              <br></br>
              <br></br>
              <h4>Algorithm</h4>
              <li>Linear Regression</li>
        
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
        <Code/>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="interests"
        >
          <Output/>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="awards"
        >
          <div className="w-100">
            <h2 className="mb-5">CONCLUSION</h2>
            <img className="conclusion" src={conclusion} alt=""/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
