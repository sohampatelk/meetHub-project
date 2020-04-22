import React, { Component } from "react";
import "./App.css";
//import { connect } from "react-redux";
import SignupForm from "./components/SignupForm";
import { Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <SignupForm />
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
