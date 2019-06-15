import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SimpleImg } from 'react-simple-img';
import { Tag, Typography, List } from 'antd';
import { fetchCurrentSongData } from '../actions';

const { Item } = List;
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1em',
    zoom: 0.85
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  images: {
    marginRight: '1em'
  }
};

class TrackRow extends Component {
  convertMsToMinSec(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  renderArtistsName(artists) {
    return artists.map(artist => artists.indexOf(artist) === artists.length - 1 ? `${artist.name} ` : `${artist.name}, `);
  };

  renderExplicitTag(explicit) {
    return explicit ? <Tag className='explicit-tag'>Explicit</Tag> : null;
  };

  renderSongDuration(duration) {
    return (
      <div>
        <Typography className='song-duration'>
          {this.convertMsToMinSec(duration)}
        </Typography>
      </div>
    );
  };

  renderAlbumCover(url) {
    return (
      <SimpleImg
        className='album-cover'
        width={80}
        height={80}
        src={url}
      />
    );
  };

  renderTracks() {
    const { album, artists, name, explicit, duration_ms, preview_url } = this.props.data;

    if (preview_url === null) {
      return null;
    }

    return (
      <Item
        style={styles.container}
        className='track-row'
        onClick={() => this.props.fetchCurrentSongData({ album, artists, name, preview_url })}
      >
        <Item.Meta
          avatar={this.renderAlbumCover(album.images[2].url)}
          title={name}
          description={
            <Typography>
              {this.renderExplicitTag(explicit)}
              <span className='song-artist'>
                {this.renderArtistsName(artists)}
              </span>
              <span className='song-album'>
                - {album.name}
              </span>
            </Typography>
          }
        />
        {this.renderSongDuration(duration_ms)}
      </Item>
    );
  };

  render() {
    return (
      <>
        {this.renderTracks()}
      </>
    );
  }
}

export default connect(null, { fetchCurrentSongData })(TrackRow);
