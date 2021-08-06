import React, { Component } from 'react';
import {connect} from 'react-redux'

class Mode extends Component {

  SetIsDarkTheme(){
    this.props.setIsDarkTheme()
  }
  
  render() {
    return (
      <div className="mode">
        <span className="mode-name">Light Mode:</span>
        <label className="mode-switch">
          <input 
            onClick={() => this.SetIsDarkTheme()}
            type="checkbox" className="mode-switch__check" />
          <span className="mode-switch__slider" />
        </label>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mode)