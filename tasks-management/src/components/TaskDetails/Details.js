import React from "react";
import { useAppContext } from "../../context/AppContext";

const Details = (props) => {
  const { loggedInContact } = useAppContext();

  return <div>
       <b>Details</b>
       <br/><br/>
      <p>
        The purpose of the sign-in page is to allow an entry page where the user is authenticated.  If a user needs to access a secure page, they will be redirected to this page first.  Once signed-in, the user will be redirected to the page that they were trying to access
      </p>
      <img width="100" src="https://github.com/khaleed031/central-experiments/blob/Khaleed-branch/tasks-management/src/u2730.png?raw=true" />
    </div>;
};

export default Details;