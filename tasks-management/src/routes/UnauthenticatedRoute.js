import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { getQuerystring } from '../helper/utils'
const UnauthenticatedRoute = ({ children, showPageContentOnly, ...rest }) => {
  const redirect = getQuerystring("redirect");
  const { loggedInContact, showPageContentOnlyHandeler } = useAppContext();
  const location = useLocation();
  React.useEffect(() => {
    showPageContentOnlyHandeler(showPageContentOnly ? showPageContentOnly : false);
  }, [location]);
  return (
    <Route {...rest}>
      {loggedInContact ? (redirect ? <Redirect to={redirect === "" || redirect === null ? `/Home` : redirect} /> : children) : (children)}
    </Route>
  );
};

export default UnauthenticatedRoute;
