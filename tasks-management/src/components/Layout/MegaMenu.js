import React from "react";
import { Dropdown } from "react-bootstrap";
import { CustomToggle } from "../Shared/CustomDropdown";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

const MegaMenu = (props) => {
    const menus = [
        {
            id: 1,
            menuText: "Central",
            link: "/Home",
            isActive: true
        },
        {
            id: 2,
            menuText: "Commerce",
            link: "/Commerce",
            isActive: false
        },
        {
            id: 3,
            menuText: "Committees",
            link: "/Committees",
            isActive: false
        },
        {
            id: 4,
            menuText: "Communications",
            link: "/Communications",
            isActive: false
        },
        {
            id: 5,
            menuText: "CMS",
            link: "/CMS",
            isActive: false
        },
        {
            id: 6,
            menuText: "CRM",
            link: "/CRM",
            isActive: false
        }                                
    ];

    let menuSection = menus.map(menu=> {
        return (
            <div className="my-2" key={menu.id}>
                <Link className={menu.isActive ? "font-weight-bold text-dark" : "font-weight-bold text-D7D7D7"} to={menu.link}>{menu.menuText}</Link>            
            </div>
        )
    });

    return (
        <Dropdown id="navbarDropdownContainer">
            <Dropdown.Toggle
                as={CustomToggle}
                className="nav-link dropdown-toggle navbar-fa px-1 pt-2 text-D7D7D7"
            >
                <FontAwesomeIcon icon={faChevronDown} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <div className="row py-4">
                <div className="col-md-2 offset-md-1 border-right">
                    {menuSection}
                </div>
                <div className="col-md-3">
                    <div className="ml-3">
                    <div className="my-2 font-weight-bold">Upcoming Events</div>
                    <div className="d-flex mb-3">
                        <div className="eventDateContainer bg-light text-center px-3 py-2">
                        <span>April</span>
                        <br />
                        <span className="text-lg-center font-weight-bold">18</span>
                        <br />
                        <span>2020</span>
                        </div>
                        <div className="pl-3">
                        <a href="#" className="text-decoration-none">
                            Introduction to Central
                        </a>
                        <br />
                        <span>Zoom</span>
                        <br />
                        <span className="badge badge-light font-weight-normal">
                            Webinar
                        </span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="eventDateContainer bg-light text-center px-3 py-2">
                        <span>April</span>
                        <br />
                        <span className="text-lg-center font-weight-bold">25</span>
                        <br />
                        <span>2020</span>
                        </div>
                        <div className="pl-3">
                        <a href="#" className="text-decoration-none">
                            Central for members
                        </a>
                        <br />
                        <span>Zoom</span>
                        <br />
                        <span className="badge badge-light font-weight-normal">
                            Webinar
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="my-2 font-weight-bold">Insights</div>
                    <div className="my-2">Recently Signed-in</div>
                    <div className="my-2">Email sent</div>
                    <div className="my-2">Order completed</div>
                    <div className="my-2">Recent registrations</div>
                    <div className="my-2">Latest submissions</div>
                </div>
                <div className="col-md-4">
                    <div className="my-2 font-weight-bold">To do</div>
                    <div className="d-flex">
                    <div className="text-center">
                        <div className="text-black-50 pr-3">Over Due</div>
                        <div className="border-right">
                        <a href="#">0</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-black-50 px-3">Due Today</div>
                        <div className="border-right">
                        <a href="#">3</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-black-50 px-3">This week</div>
                        <div>
                        <a href="#">12</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>
  );
};

export default MegaMenu;
