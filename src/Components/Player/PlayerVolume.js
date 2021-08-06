import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'

class PlayerVolume extends Component {

  SetVolume(index) {    
    this.volumeProgress.value = index
    this.props.setVolume(index)
  }

  ChangeVolume(index,isUp) {
    if (isUp) {
      (index < 100) && index++;
    }else {
      (index > 0) && index--;
    }
    this.SetVolume(index)
  }

  SetOnInputVolumeProgress() {    
    let currentVolume = this.volumeProgress.value
    this.SetVolume(currentVolume)
  }

  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this)
    this.volumeProgress = this.rootElm.querySelector('.player-volume__progress')    
    this.volumePercent = this.rootElm.querySelector('.player-volume__viewPercent')        
  }

  render() {
    return (
      <div className="player-volume">
        <div className="player-volume__control">
          <span 
            onClick = {() => this.ChangeVolume(this.props.currentVolume,false)}
            className="player-volume__down">➖</span>
          <input 
            onInput = {() => this.SetOnInputVolumeProgress()}
            type="range" min={0} max={100} 
            defaultValue={100} 
            className="player-volume__progress" />
          <span 
            onClick = {() => this.ChangeVolume(this.props.currentVolume,true)}
            className="player-volume__up">➕</span>
        </div>
        <span className="player-volume__viewPercent">{`${this.props.currentVolume}%`}</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {    
    currentVolume: state.currentVolume
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {    
    setVolume: (volume) => {
      dispatch({type: "SET_VOLUME",volume})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerVolume)