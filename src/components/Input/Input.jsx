import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  state = {
    name: '',
    number: '',
    filter: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  handleFilterChange = ({ target }) => {
    const filter = target.value;
    this.setState({ filter });
    this.props.onFilterChange(filter);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <label>
            <input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <p>Number</p>
          <label>
            <input
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Tel"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func,
};
