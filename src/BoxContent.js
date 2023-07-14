import React from "react";
import ColorBox from "./ColorBox";

function BoxColor() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header mb-4">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body"  style={{justifyContent:"space-between"}}>
          <h4 className="small font-weight-bold">
            Server Migration
            <span className="float-right" id="per1">20%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "20%" }}
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Sales Tracking
            <span className="float-right" id="per2">40%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Customer Database
            <span className="float-right" id="per3">60%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Payout Details
            <span className="float-right" id="per4">80%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Server Migration
            <span className="float-right" id="per5">Cpmplete</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
      <ColorBox
      boxcolor={"primary"}
      boxtitle={"Primary"}
      boxcolorcode={"#4e73df"}
      />
      <ColorBox
      boxcolor={"success"}
      boxtitle={"Success"}
      boxcolorcode={"#1cc88a"}
      />
      <ColorBox
      boxcolor={"info"}
      boxtitle={"Snfo"}
      boxcolorcode={"#36b9cc"}
      />
      <ColorBox
      boxcolor={"warning"}
      boxtitle={"Warning"}
      boxcolorcode={"#f6c23e"}
      />
      <ColorBox
      boxcolor={"danger"}
      boxtitle={"Danger"}
      boxcolorcode={"#e74a3b"}
      />
      <ColorBox
      boxcolor={"secondary"}
      boxtitle={"Secondary"}
      boxcolorcode={"#858796"}
      />
      <ColorBox
      boxcolor={"light"}
      boxtitle={"Light"}
      boxcolorcode={"#f8f9fc"}
      />
      <ColorBox
      boxcolor={"dark"}
      boxtitle={"Dark"}
      boxcolorcode={"#5a5c69"}
      />

      </div>
    </div>
  );
}
export default BoxColor;
