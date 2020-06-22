import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = (props) => {
  return (
    <div id="notFoundPageContainer">
        <div class="card text-center w-50">
            <div class="card-header">
            <h3>PAGE NOT FOUND</h3>
            </div>
            <div class="card-body">
            <p>
                The page you are looking for might have been removed, had its name
                changed or is temporarily unavailable.
            </p>
            <p>Please check the URL and try again.</p>
            <p>
                <Link className="btn btn-outline-primary rounded-pill" to="/Home">
                Go Back Home
                </Link>
            </p>
            </div>
        </div>
    </div>
  );
};

export default NotFound;
