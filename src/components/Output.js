import React from "react";
import output_1 from "../img/output_1.png"
import output_2 from "../img/output_2.png"
import "../App.css";



const Output = () => {
    return(
        <div className="w-100">
            <h2 className="mb-5">OUTPUT</h2>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                <img className="output" src={output_1} alt=""></img>
                </div>
                <div className="col-lg-4 col-md-0">
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                <img className="output" src={output_2} alt=""></img>
                </div>

            </div>
            
           
          </div>
    );
}

export default Output;