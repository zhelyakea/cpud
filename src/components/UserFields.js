import React, { Component } from "react";
import Field from "./Field";

import Select from "react-select";
import "!style-loader!css-loader!react-select/dist/react-select.css";

import block from "bem-cn";
const b = block("app");
import "./App.scss";
import { returnDays, returnYears, returnMonth } from "../services/dates";

export default class UserFields extends Component {
  renderField(type) {
    return (
      <Field
        type={type}
        value={this.props.user[type]}
        change={this.props.change}
        valid={this.props.user[`${type}Valid`]}
      />
    );
  }
  renderDate(type, date, list) {
    const { changeDate } = this.props;
    return (
      <select
        name={`select-${type}`}
        className={`select ${type}`}
        onChange={event => changeDate(event, type)}
        value={date[type]}
      >
        {list.map(item => <option key={item}>{item}</option>)}
      </select>
    );
  }
  render() {
    const { date } = this.props.user;
    const { day, month, year } = date;
    return (
      <div className={b("wrapper")}>
        {this.renderField("name")}
        {this.renderDate("day", date, returnDays(month, year))}
        {this.renderDate("month", date, returnMonth())}
        {this.renderDate("year", date, returnYears())}
        {this.renderField("address")}
        {this.renderField("city")}
        {this.renderField("phone")}
      </div>
    );
  }
}
