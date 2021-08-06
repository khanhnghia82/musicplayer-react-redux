import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayItem extends Component {

  SetCurrentSong() {      
    (this.props.currentIndex !== this.props.index) &&
      this.props.setCurrentSong(this.props.index, this.props);
      
    (!this.props.isPlaying) && this.props.setIsPlaying()
  }
  
  renderSong() {    
    const isActive = (this.props.currentIndex===this.props.index) ? true : false
    return (
      <div 
        onClick = {() => this.SetCurrentSong()}
        className={`song ${isActive && "song--active"}`}>
        <img src={this.props.image} alt="" className="song__thumb" />
        <div className="song__info">
          <h3 className="song__info-name">{this.props.name}</h3>
          <p className="song__info-singer">{this.props.singer}</p>
        </div>
        <div className="song__effect">
          <div className="song__effect-bar" />                
          <div className="song__effect-bar" />                
          <div className="song__effect-bar" />                
          <div className="song__effect-bar" />                
          <div className="song__effect-bar" />
        </div>
      </div>
    );
  }

  componentDidUpdate() {   
    // console.log('Did update');    
    this.renderSong()
  }

  render() {
    return (      
        this.renderSong()      
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentIndex: state.currentIndex,
    isPlaying: state.isPlaying
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setIsPlaying: () => {
      dispatch({type: "SET_ISPLAYING"})
    },
    setCurrentSong: (index,song) => {
      dispatch({type: "SET_CURRENT_SONG", index, song})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayItem)
