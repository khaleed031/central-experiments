import React from "react";
import { useAppContext } from "../../context/AppContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuickLinks = (props) => {
  const { loggedInContact } = useAppContext();

  return <div>
      <b>Quick Links</b>
      <br/><br/>
      <p><span className="well-grey" ><center>M</center></span><a href="#">Mark Complete</a></p>
      <p><span className="well-grey" ><center>A</center></span><a href="#">Attach File</a></p>
      <p><span className="well-grey" ><center>C</center></span><a href="#">Create sub tasks</a></p>
      <p><span className="well-grey" ><center>P</center></span><a href="#">Post a link</a></p>
    </div>;
};

export default QuickLinks;