import React from "react";
import { useAppContext } from "../../context/AppContext";

const About = (props) => {
  const { loggedInContact } = useAppContext();

  return <div>
      <b>About</b>
      <br/><br/>
      <b>Assigned To</b>
      <p>
        Michael Smith
      </p>
      <b>Due Date</b>
      <p>
        2020/06/19  5:00 pm
      </p>
      <b>Priority</b>
      <p>
        Normal
      </p>
      <b>Status</b>
      <p>
        New
      </p>
      <b>Requested By</b>
      <p>
        Acme Inc - Jane Doe
      </p>
      <hr/>
      <div>Created June 3, 2020, 1:36 PM</div>
      <div>Updated June 11, 2020, 4:16 PM</div>
    </div>;
};

export default About;