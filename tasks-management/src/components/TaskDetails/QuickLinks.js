import React from "react";
import { useAppContext } from "../../context/AppContext";

const QuickLinks = (props) => {
  const { loggedInContact } = useAppContext();

  return <div>
      <b>Quick Links</b>
      <br/><br/>
      <p><span className="well-grey" ><center><img src="images/right.jpg" /></center></span><a href="#">Mark Complete</a></p>
      <p><span className="well-grey" ><center><img src="images/clip.jpg" /></center></span><a href="#">Attach File</a></p>
      <p><span className="well-grey" ><center><img src="images/list.jpg" /></center></span><a href="#">Create sub tasks</a></p>
      <p><span className="well-grey" ><center><img src="images/hlink.jpg" /></center></span><a href="#">Post a link</a></p>
    </div>;
};

export default QuickLinks;