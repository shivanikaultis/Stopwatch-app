import React, { Component } from 'react';
import { connect } from 'react-redux';
import StopwatchControls from './StopwatchControls';
import Timer from './Timer';
import LapList from './LapList';
import Lap from './Lap';
import { convertToCentiSeconds } from '../helpers/helpers';

class App extends Component {

  state = {
    totalTime: 0,
    currentLapTime: 0
  };

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate() {
    requestAnimationFrame(this.tick.bind(this));
  }

  tick() {
    if (this.props.started) {
      const now = convertToCentiSeconds(Date.now());
      const totalTime = now - this.props.started + this.props.recordedTime;
      this.setState({
        now,
        totalTime,
        currentLapTime: totalTime - this.props.lapTotal
      });
    } else {
      if (this.props.recordedTime !== this.state.totalTime) {
        this.setState({
          totalTime: this.props.recordedTime,
          currentLapTime: this.props.recordedTime - this.props.lapTotal
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Timer label={'Total'} time={this.state.totalTime} />
        <StopwatchControls />
        <Lap label={`Lap #${this.props.laps.length + 1}`} time={this.state.currentLapTime} />
        <LapList />
      </div>
    );
  }

}

export default connect(store => store)(App);
