import React from "react";
import { useAppContext } from "../../context/AppContext";

const Salutation = (props) => {
  const { loggedInContact } = useAppContext();

  const getGreetings = () => {
    let hours = new Date().getHours();
    let greetings = "";
    if (hours >= 6 && hours < 12) {
        greetings = "Good-morning";
    } else if (hours >= 12 && hours < 18) {
        greetings =  "Good-afternoon";
    } else {
        greetings =  "Good-evening";
    }
    if(loggedInContact){
        greetings = greetings + ", " + loggedInContact.firstName;
    }
    return greetings;
  };

  return <div id="greetings">{getGreetings()}</div>;
};

export default Salutation;
