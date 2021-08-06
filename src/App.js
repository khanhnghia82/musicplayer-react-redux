import React, { Component } from 'react';
import './App.css';
import Mode from './Components/Mode/Mode';
import Player from './Components/Player/Player';
import Playlist from './Components/Playlist/Playlist';
import Footer from './Components/Footer/Footer';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={`container ${this.props.isDarkTheme && 'darkMode'}`} >
          <div className={`app ${this.props.isDarkTheme && 'darkMode'}`}>
            <Mode />
            <div className="app-wrap">
              <Player />
              <Playlist />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {      
    isDarkTheme: state.isDarkTheme    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setIsDarkTheme: () => {
      dispatch({type: "SET_ISDARKTHEME"})
    }    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

