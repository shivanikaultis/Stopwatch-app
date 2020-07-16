import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lap from './Lap';

export class LapList extends Component {
  render() {
    const { laps } = this.props;
    return (
      <div>
        {laps.map((lap, i) => {
          if(i > 3){
            alert("cant exceed more than 5 times laps");
          } else{
            const lapNumber = laps.length - i;
            return (
              <Lap key={lapNumber} label={`Lap #${lapNumber}`} time={lap} />
            );
          }
          return ;
        })}
      </div>
    );
  }
}

export default connect(state => {return {laps: state.laps};})(LapList);
