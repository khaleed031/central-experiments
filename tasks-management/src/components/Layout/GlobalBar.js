import React from "react";
import { faBars, faHome, faCalendar, faChartLine, faCommentAlt, faBell, faClipboardCheck, faPlus, faReply, faTasks  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MegaMenu from './MegaMenu'

class GlobalBar extends React.Component {
  render() {
    return (
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-white"
          id="centralNavbar"
        >
          <a
            className="navbar-brand text-D7D7D7 mt-1"
            href="#"
            onClick={this.props.toggleAreaListing}
          >
            <FontAwesomeIcon icon={faBars} />
          </a>
          <a className="navbar-brand text-074D89 mr-2" href="#">
            ABC
          </a>
          <a className="navbar-brand text-D7D7D7 mr-2" href="#">
            |
          </a>
          <a
            className="navbar-brand text-074D89 mr-0"
            asp-controller="Home"
            asp-action="Dashboard"
          >
            Central
          </a>
          <MegaMenu />          
          <select
            className=""
            name="choices-multiple-remove-button"
            id="choicesGlobalBar"
            placeholder="Search for people, groups, and more"
          >
            <option value="" className="choicesGlobalBarPlaceholder">
              Search for people, groups, and more
            </option>
            <option value="Choice 1">First 2 Last 2</option>
            <option value="Choice 2">First 3 Last 3</option>
            <option value="Choice 3">First 4 Last 4</option>
            <option value="Choice 4">First 5 Last 5</option>
          </select>
          <a
            className="navbar-fa home"
            asp-area=""
            asp-controller="Home"
            asp-action="Dashboard"
          >
            <FontAwesomeIcon icon={faHome} />
            <div>Home</div>
          </a>
          <a
            className="navbar-fa calendar"
            asp-area=""
            asp-controller="Calendar"
            asp-action="Index"
          >
            <FontAwesomeIcon icon={faCalendar} />
            <div>Calendar</div>
          </a>
          <a
            className="navbar-fa insights"
            asp-area=""
            asp-controller="Home"
            asp-action="Insights"
          >
            <FontAwesomeIcon icon={faChartLine} />
            <div>Insights</div>
          </a>
          <a className="navbar-fa messages" href="#">
            <FontAwesomeIcon icon={faCommentAlt} />
            <div>Messages</div>
          </a>
          <a className="navbar-fa notifications" href="#">
            <FontAwesomeIcon icon={faBell} />
            <div>Notifications</div>
          </a>
          <a className="navbar-fa todos" href="#">
            <FontAwesomeIcon icon={faClipboardCheck} />
            <div>To Do</div>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex justify-content-end w-100">
              <div>
                <a className="navbar-fa" href="#">
                  <FontAwesomeIcon icon={faPlus} />
                  <div>New</div>
                </a>
              </div>
              <div>
                <a className="navbar-fa" href="#">
                  <FontAwesomeIcon icon={faReply} flip="horizontal"/>
                  <div>Share</div>
                </a>
              </div>
              <div className="btn-group">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-default dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Me
                  </button>
                  <div className="dropdown-menu">
                    <a href="#">Log out</a>
                  </div>
                </div>
              </div>
              <div>
                <a className="navbar-fa" href="#">
                  <FontAwesomeIcon icon={faTasks} />
                  <div>Quick Access</div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default GlobalBar;
