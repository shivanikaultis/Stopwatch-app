import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, addLap, resetTimer } from '../actions/actions';
import { convertToCentiSeconds } from '../helpers/helpers';

export class StopwatchControls extends Component {
  render() {
    const { started, dispatch } = this.props;
    if (started) {
      return (
        <div>
          <button onClick={() => this.props.stopTimer()}>
           Stop
          </button>
          <button onClick={() => this.props.addLap()}>
           Lap
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.props.startTimer()}>
           Start
          </button>
          <button onClick={() => this.props.resetTimer()}>
           Reset
          </button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.started
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => { dispatch(startTimer(convertToCentiSeconds(Date.now()))) },
    addLap: () => {dispatch(addLap(convertToCentiSeconds(Date.now())))},
    stopTimer: () => {dispatch(stopTimer(convertToCentiSeconds(Date.now())))},
    resetTimer: () => {dispatch(resetTimer())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopwatchControls);
