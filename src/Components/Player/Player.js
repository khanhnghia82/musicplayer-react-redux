import React, { Component } from 'react';
import PlayerInfo from './PlayerInfo';
import {connect} from 'react-redux'
import PlayerControl from './PlayerControl';

class Player extends Component {
  render() {
    return (
      <section className={`player ${this.props.isPlaying && 'playing'}`}>
        <h3 className="player-heading">playing now</h3>

        <PlayerInfo />                

        <PlayerControl />

      </section>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: state.currentSong,
    isPlaying: state.isPlaying
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)