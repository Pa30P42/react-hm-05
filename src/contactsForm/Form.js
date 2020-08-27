import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    id: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handeleSubmit = (e) => {
    e.preventDefault();
    const wrongContact = this.props.contacts.map((contact) => contact.name);
    wrongContact.find((item) => item === this.state.name)
      ? this.props.alertSwitch()
      : this.props.addContact({
          name: this.state.name,
          number: this.state.number,
          id: uuidv4(),
        });
    this.setState({ name: "" });
    this.setState({ number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handeleSubmit} className={styles.formWrapper}>
          <h3 className={styles.inputTitle}>Name</h3>
          <label>
            <input
              className={styles.formInput}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <h3 className={styles.inputTitle}>Phone</h3>
          <label>
            <input
              className={styles.formInput}
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.btn} type="submit">
            Add Contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
