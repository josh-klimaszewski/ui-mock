import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: "dashboard"
    };
  }
  setActiveNav = nav => {
    this.setState({ activeNav: nav });
  };
  render() {
    return (
      <div className="nav-bar">
        
        <div className="links">
            {/* <Link to="/" 
            className={this.state.activeNav === "dashboard" ? "active" : ""}
            onClick={() => this.setActiveNav("dashboard")}
            >
            <i className="material-icons md-dark">dashboard</i>
              Dashboard
            </Link> */}
          <div
            className={this.state.activeNav === "dashboard" ? "active" : ""}
            onClick={() => this.setActiveNav("dashboard")}
          >
            <i className="material-icons md-dark">dashboard</i>
            <Link to="/" className="md-dark">
              Dashboard
            </Link>
          </div>
          <div
            className={this.state.activeNav === "invoices" ? "active" : ""}
            onClick={() => this.setActiveNav("invoices")}
          >
            <i className="material-icons md-dark md-inactive">receipt</i>
            <Link to="/invoices" className="md-dark md-inactive">
              Invoices
            </Link>
          </div>
          <div
            className={this.state.activeNav === "paybills" ? "active" : ""}
            onClick={() => this.setActiveNav("paybills")}
          >
            <i className="material-icons md-dark md-inactive">credit_card</i>
            <Link to="/paybills" className="md-dark md-inactive">
              Pay Bills
            </Link>
          </div>
          <div
            className={this.state.activeNav === "accounting" ? "active" : ""}
            onClick={() => this.setActiveNav("accounting")}
          >
            <i className="material-icons md-dark md-inactive">assessment</i>
            <Link to="/accounting" className="md-dark md-inactive">
              Accounting
            </Link>
          </div>
          <div
            className={this.state.activeNav === "reports" ? "active" : ""}
            onClick={() => this.setActiveNav("reports")}
          >
            <i className="material-icons md-dark md-inactive">subject</i>
            <Link to="/reports" className="md-dark md-inactive">
              Reports
            </Link>
          </div>
          <div
            className={this.state.activeNav === "connectedapps" ? "active" : ""}
            onClick={() => this.setActiveNav("connectedapps")}
          >
            <i className="material-icons md-dark md-inactive">device_hub</i>
            <Link to="/connectedapps" className="md-dark md-inactive">
              Connected Apps
            </Link>
          </div>
          <div className="gap" />
          <div className="gap" />
          <div className="gap" />
          <div className="gap" />
          <div className="gap" />
          <div
            className={this.state.activeNav === "settings" ? "active" : ""}
            onClick={() => this.setActiveNav("settings")}
          >
            <i className="material-icons md-dark md-inactive">settings</i>
            <Link to="/settings" className="md-dark md-inactive">
              Settings
            </Link>
          </div>
        </div>
        {/* <div className="settings">
                    <i className='material-icons md-dark md-inactive'>settings</i>
                    <Link to="/settings" className='md-dark md-inactive'>Settings</Link>
                </div> */}
      </div>
    );
  }
}
export default Nav;
