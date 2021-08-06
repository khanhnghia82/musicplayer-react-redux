import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import PlayerVolume from './PlayerVolume';
import PlayerWave from './PlayerWave';

class PlayerControl extends Component { 
  
  SetIsplaying() {
    this.props.setIsPlaying()
    // let audio = new Audio(this.props.currentSong.path)
    // console.log(audio)        
  }

  SetRandomSong() {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * this.props.lengthOfSongs)
    }while (newIndex === this.props.currentIndex)
    this.props.setSong(newIndex)
  }

  SetNextSong() {
    if (!this.props.isRepeat) {
      if (!this.props.isRandom) {
        var tempIndex = this.props.currentIndex
        tempIndex++    
        (tempIndex === this.props.lengthOfSongs) && (tempIndex=0);
        this.props.setSong(tempIndex)
      }
      else {
        this.SetRandomSong()
      }
    }
  }

  SetPrevSong() {
    if (!this.props.isRepeat) {
      if (!this.props.isRandom) {
        var tempIndex = this.props.currentIndex
        tempIndex--
        (tempIndex <0 ) && (tempIndex=this.props.lengthOfSongs-1);
        this.props.setSong(tempIndex)
      }
      else {
        this.SetRandomSong()
      }
    }
  }

  SetRandom() {
    this.props.setRandom()
  }

  SetRepeat() {
    this.props.setRepeat()
  }

  SetProgressAudio() {
    if (this.audio.duration) {
      const progressPercent = Math.floor(this.audio.currentTime/this.audio.duration*100)
      this.progressAudio.value = progressPercent

      let seek = parseFloat(this.audio.currentTime/60).toFixed(2)
      this.seekTime.textContent = seek

      let duration = parseFloat(this.audio.duration/60).toFixed(2)
      this.durationTime.textContent = duration
    }
  }

  SetOnClickProgressAudio() {
    const seekTime = this.progressAudio.value/100 * this.audio.duration
    this.audio.currentTime = seekTime 
  } 

  SetEndedAudio(){
    (this.props.isRepeat) ? this.audio.play() : this.SetNextSong()
  }
  
  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this)
    this.audio = this.rootElm.querySelector('#audio')
    this.progressAudio = this.rootElm.querySelector('#player-progress__slider')    
    this.seekTime = this.rootElm.querySelector('.player-progress__time-seek')
    this.durationTime = this.rootElm.querySelector('.player-progress__time-duration')    
  }

  componentDidUpdate(prevProps, prevState) {        
    (this.props.isPlaying) ? this.audio.play() : this.audio.pause();
    this.audio.volume = this.props.currentVolume/100;
  }

  render() { 
    return (
      <div className="player-wrapControl">
        
        {/* <PlayerWave /> */}
        <PlayerVolume />

        <div className="player-progress">
          <div className="player-progress__time">
            <label className="player-progress__time-seek"></label>
            <label className="player-progress__time-duration"></label>
          </div>
          <input 
            onInput= {()=>this.SetOnClickProgressAudio()}
            type="range" 
            id="player-progress__slider" 
            className="player-progress__slider" 
            defaultValue={0} step={1} min={0} max={100} />
        </div>

        <audio 
          onTimeUpdate = {()=>this.SetProgressAudio()}
          onEnded = {() => this.SetEndedAudio()}
          id="audio" 
          src={this.props.currentSong.path} 
        />

        <div className="player-control">
          <div 
            onClick = {() => this.SetRepeat()}
            className={`player-control__repeat btn ${this.props.isRepeat && "btn--active"}`}>
            <i className="fas fa-redo" />
          </div>
          <div 
            onClick = {() => this.SetPrevSong()}
            className="player-control__backward btn">
            <i className="fas fa-step-backward" />
          </div>
          <div 
            onClick={() => this.SetIsplaying()}
            className="player-control__togglePlay btn">
            <i className="fas fa-pause icon-pause" />
            <i className="fas fa-play icon-play" />
          </div>
          <div 
            onClick = {() => this.SetNextSong()}
            className="player-control__forward btn">
            <i className="fas fa-step-forward" />
          </div>
          <div 
            onClick = {() => this.SetRandom()}
            className={`player-control__random btn ${this.props.isRandom && "btn--active"}`}>
            <i className="fas fa-random" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentIndex: state.currentIndex,
    currentSong: state.currentSong,
    currentVolume: state.currentVolume,
    isPlaying: state.isPlaying,    
    isPlaying: state.isPlaying,
    isRandom: state.isRandom,
    isRepeat: state.isRepeat,
    lengthOfSongs: state.lengthOfSongs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setIsPlaying: () => {
      dispatch({type: "SET_ISPLAYING"})
    },
    setSong: (index) => {
      dispatch({type: "SET_NEXT_PREV_SONG", index})
    },
    setRandom: () => {
      dispatch({type: "SET_ISRANDOM"})
    },
    setRepeat: () => {
      dispatch({type: "SET_ISREPEAT"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerControl)