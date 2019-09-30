import React from "react";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./Context";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import About from "./components/pages/About";
import Test from "./components/test/Test";
import Notfound from "./components/pages/Notfound";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Router>
        {" "}
        <div className="App">
          <Navbar
            brand="brand"
            home="addContact"
            listContacts="listContacts"
            about="About"
          />
          <Switch>
            <Route exact path="/" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route exact path="/contact" component={Contacts} />
            <Route exact path="/about" component={About} />
            <Route exact path="/test" component={Test} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
