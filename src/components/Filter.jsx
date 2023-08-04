import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = event => {
    const { onFilterChange } = this.props;
    const { value } = event.target;
    this.setState({ filter: value });
    onFilterChange(value);
  };

  render() {
    const { filter } = this.state;

    return (
      <>
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

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};
