import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tag, Typography, List, Avatar } from 'antd';
import { fetchCurrentSongData } from '../actions';

const { Item } = List;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1em'
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
          avatar={<Avatar size={64} src={album.images[2].url} />}
          title={name}
          description={
            <Typography>
              {explicit ? <Tag>Explicit</Tag> : null}
              {artists.map(artist => {
                if (artists.indexOf(artist) === artists.length - 1) {
                  return artist.name;
                } else {
                  return `${artist.name}, `;
                }
              })} - {album.name}
            </Typography>
          }
        />
        <div>
          <Typography>{this.convertMsToMinSec(duration_ms)}</Typography>
        </div>
      </Item>
    );
  }

  render() {
    return (
      <>
        {this.renderTracks()}
      </>
    );
  }
}

export default connect(null, { fetchCurrentSongData })(TrackRow);
