import React from "react";


function SideBar(){
    return(
                <ul className="navbar-nav sidebar " id="sidebarside">
                  <div className="sidebar-brand-icon">
                  <i className="fa-solid fa-face-smile-wink fa-2x " style={{color:'white'}} id="smileIcon"></i>
                  </div>
                  <hr className="sidebar-divider my-0" ></hr>
                  <li>
                    <a className="nav-link active" href="none">
                        <i class="fa-solid fa-gauge-high" style={{color:'white'}} id="meter"></i>
                        <span id="dashboard"><b>Dashboard</b></span>
                    </a>
                  </li>
                  <hr className="sidebar-divider my-0"></hr>
                  <div className="sidebar-heading" id="sidebarHeading"><b>INTERFACE</b></div>
                  <li>
                  <i className="fa-solid fa-gear" id="setting"></i>
                  <span id="com">Components</span>
                  </li>
                  <li >
                  <i className="fa-solid fa-wrench" id="set"></i>
                  <span id="utt">Utilities</span>
                  </li>
                  <div id="hra">
                  <hr className="sidebar-divider my-0" ></hr>

                  </div>
                  <div className="sidebar-heading" id="sidebarHeading2"><b>ADDONS</b></div>
                   <div>
                   <i className="fa-solid fa-folder" style={{color:'white'}} id="file"></i>
                   <span id="pages">Pages</span>
                   </div>
                   <div>
                   <i className="fa-solid fa-chart-area" style={{color:'white'}} id="file"></i>
                   <span id="pages">Charts</span>
                   </div>
                   <div id="y">
                   <i className="fa-solid fa-table" style={{color:'white'}} id="file"></i>
                   <span id="pages">Tables</span>
                   </div>
                  <hr className="sidebar-divider my-0" ></hr>
                  
                </ul>
        )
}
export default SideBar;