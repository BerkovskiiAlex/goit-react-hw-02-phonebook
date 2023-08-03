import React, { Component } from 'react';

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
    this.setState({ filter: target.value });
  };

  render() {
    const { name, number, filter } = this.state;
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

        <p>Find contacts by name</p>
        <label>
          <input
            type="text"
            name="filter"
            placeholder="Search by name"
            value={filter}
            onChange={this.handleFilterChange}
          />
        </label>
      </>
    );
  }
}
