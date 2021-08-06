import React, { Component } from 'react';
import SONGS from '../../Data.json'
import PlayItem from './PlayItem'

class Playlist extends Component {

  renderPlayList() {
    return(
      SONGS.map((song,index) => (
        <PlayItem 
          key={index}
          index={index}
          image={song.image}
          name={song.name}
          singer={song.singer}
          path={song.path}
        />
      ))
    )
  }

  render() {
    return (
      <section className="playlist">
        {
          this.renderPlayList()
        }
      </section>
    );
  }
}



export default (Playlist)