import React, { Component } from "react";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch){
    return {
      submit: (data1) => dispatch({ type: "SUBMIT", payload: data1 })
    };
  };

 function mapStateToProps(state) {
    return { save: state };
  };

class Home extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }


  submit = () => {
    this.props.submit(this.state);
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="FirstName"
          onChange={e => {
            this.setState({
              firstName: e.target.value
            });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="LastName"
          onChange={e => {
            this.setState({
              lastName: e.target.value
            });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          onChange={e => {
            this.setState({
              email: e.target.value
            });
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={e => {
            this.setState({
              password: e.target.value
            });
          }}
        />
        <br />
        <input type="submit" onClick={() => this.submit()} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
