import React from "react";

function Header() {
  return (
    <div className="navbar navbar-light shadow" id="navbaar">
      <div className="container-fluid">
        <form
          className="navbar navbar-seatch  mr-auto"
          id="searchbar"
          role="search"
        >
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder="search for..."
            ></input>
            <div className="input-group-apped">
              <button className="btn btn-primary" id="searchbtn" title="search">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0" id="navbarIcons">
          <li className="navbar-item" id="bellicon">
            <a className="nav-link active" href="_#" aria-current="page">
              <i className="fa-solid fa-bell" style={{ color: "#a8b3c7" }}></i>
            </a>
          </li>
          <li className="navbar-item" id="messegeicon">
            <a className="nav-link active" href="_#" aria-current="page">
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#a8b3c7" }}
              ></i>
            </a>
          </li>
          <div className="topbar-divider d-none d-sm-block" id="yline"></div>
          <li className="navbar-item" id="profilename">
            <a className="nav-link active" href="_#" aria-current="page">
              <span id="profilename">Douglas McGee</span>
              <img
                alt="profile"
                className="img-profile rounded-circle"
                src="img/undraw_profile.svg"
                id="profileimg"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
