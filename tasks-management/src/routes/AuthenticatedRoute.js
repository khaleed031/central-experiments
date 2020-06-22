import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
const AuthenticatedRoute = ({ children, showPageContentOnly, ...rest }) => {
  const { pathname, search } = useLocation();
  const { loggedInContact, showPageContentOnlyHandeler } = useAppContext();
  const location = useLocation();
  React.useEffect(() => {
    showPageContentOnlyHandeler(showPageContentOnly ? showPageContentOnly : false);
  }, [location]);
  return (
    <Route {...rest}>
      {loggedInContact ? (children) : (<Redirect to={`/?redirect=${pathname}${search}`} />)}
    </Route>
  );
};

export default AuthenticatedRoute;
