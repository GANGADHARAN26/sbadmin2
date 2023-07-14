import React from "react";


function Content(){
    return(
            <div className="d-sm-flex align-items-center justify-content-between mt-4 " id="dashboardrow"  >
                <h1 className="text-gray-800 mb-0  m-lg-2">Dashboard</h1>
                <a className="btn btn-primary" href="_blank">
                <i className="fa-solid fa-download"></i>
                  Genarate Report
                </a>
            </div>
        )
}

export default Content;