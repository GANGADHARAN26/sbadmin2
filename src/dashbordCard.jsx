import React from "react";

const DashboardCard = ({ color, textColor, title, value ,bar}) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4 " id="columnbox">
      <div
        className="card border-left-primary shadow h-100 py-2"
        id="cardf"
        style={{ borderLeft: `.25rem solid ${color}` }}
      >
        <div className="card-body">
          <div className="row align-items-center no-gutters">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${textColor} text-uppercase mb-1`}
                id="titletext"
              >
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {value}
              </div>
              {bar ? 
              <div className="progress progress-sm mr-2">
                  <div className="progress-bar bg-info" role="progressbar" style={{width:'50%'}} aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></div>
              </div>: 
              <div></div>}
            </div>
            <div className="col-auto" id="colicon">
              <i className="fas fa-calender fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
