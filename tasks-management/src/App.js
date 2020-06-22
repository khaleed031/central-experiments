import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Routes from "./routes/Routes";
import { AppContext } from './context/AppContext'


class App extends React.Component{
  state = {
    loggedInContact: null,
    showPageContentOnly: false
  }

  signinHandeler = (email, password) => {
      let loggedInContactToUpdate = {contactId: 2, firstName: "Jane", lastName: "Doe", email: email, phone: null};
      this.setState({loggedInContact: loggedInContactToUpdate});
  }

  showPageContentOnlyHandeler = (flag) => {
    this.setState({showPageContentOnly: flag});
  }

  render()
  {
    const loggedInContact = this.state.loggedInContact;
    const signinHandeler = this.signinHandeler;
    const showPageContentOnlyHandeler = this.showPageContentOnlyHandeler;
    return (
      <AppContext.Provider value={{ loggedInContact, signinHandeler, showPageContentOnlyHandeler }}>
        <div id="CentralApp">
          <Layout loggedInContact={this.state.loggedInContact} showPageContentOnly={this.state.showPageContentOnly}>
            <Routes />
          </Layout>
        </div>
      </AppContext.Provider>
    );    
  }
}

export default App;
