import React from "react";
import { useAppContext } from "../../context/AppContext";

const Overview = (props) => {
  const { loggedInContact } = useAppContext();

  return <div>
      <div>
          Tasks / 327498
          <span className="float-right">
              <a href="#" className="btn_cls"><img src="images/star.jpg" /></a><a href="#" className="btn_cls"><img src="images/edit.jpg" /></a><a href="#" className="btn_cls"><img src="images/ellipse-h.jpg" /></a>
          </span>
      </div>
      <p>Create sign-in page</p>
      <div>
        <a href="#" className="link_black selected" >Overview</a> <a href="#" className="link_black" >Attachments</a> <a  className="link_black"  href="#">Links</a>
      </div>
    </div>;
};

export default Overview;
