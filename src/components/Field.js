import React, { Component } from "react";

import block from "bem-cn";
const b = block("app");
import "./App.scss";

import { obj } from "../obj";

import { phoneValidate } from "../services/validate";

export default class Field extends Component {
  state = {
    value: this.props.value,
    valid: true
  };
  validate = () => {
    const { type } = this.props;
    if (type == "phone") return this.phoneValidate();
    if (type == "name") return this.nameValidate();
  };
  phoneValidate = () => {
    const phoneValid = phoneValidate(this.state.value);
    this.setState({
      valid: phoneValid
    });
    return phoneValid;
  };
  nameValidate = () => {
    const nameValid = this.state.value.length < 100;
    this.setState({
      valid: nameValid
    });
    return nameValid;
  };
  change = event => {
    const { type, change } = this.props;
    const value = event.target.value;
    this.setState(
      { value: value },
      () => (this.validate() ? change(value, type) : false)
    );
  };
  render() {
    const { type, value } = this.props;
    return (
      <input
        className={b("field", { valid: !this.state.valid })}
        placeholder={obj[type]}
        value={this.state.value}
        onChange={this.change}
      />
    );
  }
}
