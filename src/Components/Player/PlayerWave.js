import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'

class PlayerWave extends Component {
  constructor(props) {
    super(props);
    
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audio = new Audio(this.props.currentSong.path);
    this.audioContext = new AudioContext();
    this.audioContextSrc = this.audioContext.createMediaElementSource(audio);
  }  

  renderMusicWave() {    
    var audioAnalyser = this.audioContext.createAnalyser();
    var canvasContext = this.canvasElm.getContext("2d");    
    
    this.audioContextSrc.connect(audioAnalyser);
    audioAnalyser.connect(this.audioContext.destination);
        
    audioAnalyser.fftSize = 256;
    var analyserFrequencyLength = audioAnalyser.frequencyBinCount;
    var frequencyDataArray = new Uint8Array(analyserFrequencyLength);
    // Lấy width và height của canvas
    var canvasWidth = this.canvasElm.offsetWidth;
    var canvasHeight = this.canvasElm.height;
    // Tính toán barWidth và barHeight
    var barWidth = (canvasWidth / analyserFrequencyLength) * 2.5;
    var barHeight;
    var barIndex = 0;
    
    function renderFrame() {        
        window.requestAnimationFrame(renderFrame);
        barIndex = 0;
        audioAnalyser.getByteFrequencyData(frequencyDataArray);
        // Tạo màu nền đối tượng theo sự thay đổi màu nền của theme
        canvasContext.fillStyle = this.props.isDarkTheme ? '#2e2f34' : '#dbe6f8'
        
        canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
        for (var i = 0; i < analyserFrequencyLength; i++) {
          barHeight = frequencyDataArray[i]+100;
          // Tạo màu cho thanh bar        
          var rgbRed = 30 * (50 * (i / analyserFrequencyLength));
          var rgbGreen = 150 + (i / analyserFrequencyLength);
          var rgbBlue = 80;
          
          // Điền màu và vẽ bar
          canvasContext.fillStyle = "rgb("+ rgbRed +", "+ rgbGreen +", "+ rgbBlue +")";
          canvasContext.fillRect(barIndex, (canvasHeight - barHeight), barWidth, barHeight);
          barIndex += (barWidth + 5);
        }
    }        
    renderFrame();
  }  

  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this)
    this.canvasElm = this.rootElm.querySelector('.player-wave')    
  }

  componentDidUpdate(prevProps, prevState) {
    (this.props.isPlaying) && (this.renderMusicWave())
  }

  render() {
    return (                  
      <canvas className="player-wave" />             
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {  
    currentSong: state.currentSong,  
    isDarkTheme: state.isDarkTheme,
    isPlaying: state.isPlaying
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setIsPlaying: () => {
      dispatch({type: "SET_ISPLAYING"})
    }    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerWave)