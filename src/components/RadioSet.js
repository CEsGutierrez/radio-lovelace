import React, {Component} from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {

  constructor(props) {
    super(props)
    this.state = {
    // console.log(`Radio set for ${this.props.tracks.length} tracks`);
    // const playlists = {
      morningTracks: this.props.tracks.slice(0, this.props.tracks.length / 2),
      eveningTracks: this.props.tracks.slice(this.props.tracks.length / 2, this.props.tracks.length)
    };
  }

  setFirstSong(index, playlist) {
    const newState = {...this.state};
    const playlistTracks = [...newState[playlist]];
    const track = playlistTracks[index];
    playlistTracks.splice(index, 1);
    playlistTracks.unshift(track);
    newState[playlist] = playlistTracks;
    this.setState(newState);
    
  }

  render () {
    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.morningTracks}
          />
          <Playlist
            side="Evening"
            tracks={this.state.eveningTracks}
          />
        </section>
      </div>
    );
  }
};

export default RadioSet;