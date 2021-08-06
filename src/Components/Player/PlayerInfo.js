import React, { Component } from 'react';
import { connect } from 'react-redux'

class PlayerInfo extends Component {
  render() {
    return (
      <div className="player-wrapInfo">
        <div className="player-borderImg">
          <img src={this.props.currentSong.image} alt="" 
            className="player-image" />
        </div>
        <div className="player-wrapSinger">
          <h3 className="player-songName">{this.props.currentSong.name}</h3>
          <span className="player-singerName">{this.props.currentSong.singer}</span>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo)