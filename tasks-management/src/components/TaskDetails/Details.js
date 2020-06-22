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
      <img width="100" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/RYAPZD/66/70/dc/6670dc0ddb6e49f691c6eb98086c44a0/images/task_details_option_1/u2730.png?token=ebace18f779b09407a13d8af8f0ea24737a1ab2f5e2bf24139a8e9bcce936637" />
    </div>;
};

export default Details;