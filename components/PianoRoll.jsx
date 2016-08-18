import React from 'react';
import { noteNames } from '../constants/note-names';
import classNames from 'classnames';
import Sequencer from './Sequencer.jsx';
import './styles/PianoRoll.css';




class PianoRoll extends React.Component {
  render() {
    return <Sequencer
      width='600px'
      height='300px'
      totalBeatCount={64}
      trackCount={60}
      beatWidth={24}
      trackHeight={16}
      getTrackEntry={getTrackEntry}
      getTrackLane={getTrackLane}/>;
  }
}

export default PianoRoll;
