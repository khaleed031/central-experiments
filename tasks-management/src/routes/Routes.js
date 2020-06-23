import React from "react";
import Home from "../components/Home/Home";
import Signin from "../components/SignIn/Signin";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import TaskListView from "../components/Tasks/TaskListView";
import Taskgridview from "../components/Tasks/TaskGridView";
import Taskdetails from "../components/TaskDetails/Taskdetails";
import NotFound from "../components/NotFound/NotFound";
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import { Switch } from "react-router-dom";

const Routes = (props) => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/Home">
        <Home />
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/Taskdetails">
        <Taskdetails />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/TaskListView">
        <TaskListView />
      </UnauthenticatedRoute>      
      <UnauthenticatedRoute exact path="/TaskGridview">
        <Taskgridview />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/ForgotPassword">
        <ForgotPassword />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/">
        <Signin />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute showPageContentOnly={true}>
        <NotFound />
      </UnauthenticatedRoute>
    </Switch>
  );
};

export default Routes;
