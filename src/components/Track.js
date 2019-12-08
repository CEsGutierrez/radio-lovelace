import React, {Component} from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/


class Track extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false
    }
  }

  static propTypes = {
    title: PropTypes.string,
    artist: PropTypes.string,
    playtime: PropTypes.string,
    albumart: PropTypes.string,
    favorite: PropTypes.bool,
  }

  onBoxChecked = () => {
    // upon checking the box, this toggles the favoritism value
    // ATM, the CSS is backwards, favorites are blank looking and non-favorites have solid stars. Hmm. 
    if (this.state.favorite === false) {
    this.setState({favorite: true})
    }
    else if (this.state.favorite === true) {
      this.setState({favorite: false})
    }
  }


  render() {
    return (
      <li className="track">
        <img className="track--albumart" alt={`album art for ${this.title}`} src={this.albumart} />
        <h3 className="track--title">{this.title}</h3>
        <input
          type="checkbox"
          className="track--favorite"
          onChange={this.onBoxChecked}
        />
        <p className="track--artist">{this.artist}</p>
        <p className="track--playtime">{this.playtime}</p>
        <button
          className="track--control track--to-top"
          >
          <span role="img" aria-label="send to top">🔝</span>
        </button>
        <button
          className="track--control track--switch"
          >
          <span role="img" aria-label="switch lists">↔</span>
        </button>
      </li>
    )
  }
};


export default Track;
