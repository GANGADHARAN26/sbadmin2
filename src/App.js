import React from "react";
import SideBar from "./SideNavbar";
import Header from "./Navbar";
import Content from "./Content";
import DashboardCard from "./dashbordCard";
import LineChart from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";
import BoxColor from "./BoxContent";
import RightBox from "./RightBox";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Header />
        <Content />
        <div className="row">
          <DashboardCard
            color={"#4e73df"}
            textColor={"primary"}
            title={"EARNING (MONTHLY)"}
            value={"$40,000"}
          />
          <DashboardCard
            color={"#1CC88A"}
            textColor={"success"}
            title={"EARNING (ANNUAL)"}
            value={"$215,000"}
          />
          <DashboardCard
            color={"#36b9cc"}
            textColor={"info"}
            title={"TASK"}
            value={"50%"}
            bar={'true'}
          />
          <DashboardCard
            color={"#f6c23e"}
            textColor={"warning"}
            title={"PENDING REQUESTS"}
            value={"18"}
          />
        </div>
        <div className="row">
             <div className="col-xl-8 col-lg-7">
                 <div className="card shadow mb-4">
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Earning Overview</h6>
                     </div>
                     <div className="card-body">
                      <div className="chart-area">
                          <LineChart/>
                      </div>
                     </div>
                 </div>
             </div>
             <div className="col-xl-4 col-lg-5">
                 <div className="card shadow mb-4">
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                     </div>
                     <div className="card-body">
                      <div className="chart-area">
                          <DoughnutChart/>
                      </div>
                     </div>
                 </div>
             </div>
        </div>
        <div className="row" id="rowColor">
          <BoxColor/>
          <RightBox/>
         

        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
