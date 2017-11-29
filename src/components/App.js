import React, { Component } from "react";
import { connect } from "react-redux";

import {
  addUser,
  deleteUser,
  changeUser,
  changeUserDate
} from "../actions/User";

import { phoneValidate } from "../services/validate";
import { currDay, currMonth, currYear } from "../services/dates";

import Field from "./Field";
import UserFields from "./UserFields";

import block from "bem-cn";
const b = block("app");
import "./App.scss";

const defaultState = {
  id: "",
  name: "",
  date: { day: currDay, month: currMonth, year: currYear },
  address: "",
  city: "",
  phone: "",
  phoneValid: true
};
export class App extends Component {
  static defaultProps = {
    users: {
      index: {},
      list: []
    }
  };
  state = defaultState;
  validate(type) {
    if (type == "phone") return this.phoneValidate();
    if (type == "name") return this.nameValidate();
  }
  phoneValidate() {
    const phoneValid = phoneValidate(this.state.phone);
    this.setState({
      phoneValid: phoneValid
    });
    return (
      (this.state.phone.length > 0 && phoneValid) || !this.state.phone.length
    );
  }
  nameValidate() {
    const nameValid =
      this.state.name.length < 100 && this.state.name.length > 0;
    this.setState({
      nameValid: nameValid
    });
    return nameValid;
  }
  addUser = () => {
    if (this.phoneValidate() && this.nameValidate()) {
      const { addUser } = this.props;
      const id = Math.floor(Math.random() * (1000 - 1)) + 1;
      this.setState({ id: id }, () => {
        addUser(this.state);
        this.setState(defaultState);
      });
    }
  };
  addField = (value, type) => {
    this.setState({ [type]: value }, () => {
      this.validate(type);
    });
  };
  addDateField = (event, dateType) => {
    this.setState({
      date: { ...this.state.date, [dateType]: event.target.value }
    });
  };
  changeField = id => (value, type) => {
    const { changeUser } = this.props;
    changeUser(type, value, id);
  };
  changeUserDate = id => (event, type) => {
    const { changeUserDate } = this.props;
    changeUserDate(type, event.target.value, id);
  };
  render() {
    const { deleteUser, users } = this.props;
    return (
      <div>
        <p>Добавление пользователя:</p>
        <div className={b("wrapper")}>
          <UserFields
            change={this.addField}
            changeDate={this.addDateField}
            user={this.state}
          />
          <button
            className={b("button", { green: true })}
            onClick={this.addUser}
          >
            Добавить
          </button>
        </div>
        <div className={b("list-wrapper")}>
          <p>Список пользователей:</p>
          {users.list.map(user => (
            <div key={user.id} className={b("list")}>
              <UserFields
                changeDate={this.changeUserDate(user.id)}
                change={this.changeField(user.id)}
                user={user}
              />
              <button
                className={b("button", { red: true })}
                onClick={() => deleteUser(user.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default connect(({ users }) => ({ users }), {
  addUser,
  deleteUser,
  changeUser,
  changeUserDate
})(App);
