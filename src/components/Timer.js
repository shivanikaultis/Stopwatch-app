import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formatTime } from '../helpers/helpers';

export class Timer extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <h2>{formatTime(this.props.time)}</h2>
      </div>
    );
  }
}

Timer.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default Timer;
