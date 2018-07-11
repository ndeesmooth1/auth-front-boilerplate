import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "./actions";
import { compose } from "redux";

class Signup extends Component {
  onSubmit = formProps => {
    console.log(formProps);
    this.props.signup(formProps, () => {
        this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="">Email</label>
          <Field type="text" name="email" component="input" />
        </fieldset>
        <fieldset>
          <label htmlFor="">Password</label>
          <Field
            type="password"
            name="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div> {this.props.errorMessage} </div>
        <button> Sign up! </button>
      </form>
    );
  }
}


function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage}
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(Signup);
