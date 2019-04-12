import React, { Component } from 'react';
import { Icon, Tag, Typography } from 'antd';

const { Title } = Typography;

class TrackRow extends Component {
  state = {
    playing: false
  };

  convertMsToMinSec(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  togglePlaySound(src) {
    this.setState({ playing: !this.state.playing }, () => {
      this.state.playing ? new Audio(src).play() : new Audio(src).pause();
    });
  }

  render() {
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
      }
    };
    const { album, artists, name, explicit, duration_ms, preview_url } = this.props.data;
    const { playing } = this.state;

    return (
      <div style={styles.container} className='track-row'>
        <div style={styles.infoContainer}>
          <Icon
            type={playing ? 'pause' : 'play-circle'}
            onClick={() => this.togglePlaySound(preview_url)}
          />
          <div>
            <Title level={4}>{name}</Title>
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
          </div>
        </div>
        <div>
          <Typography>{this.convertMsToMinSec(duration_ms)}</Typography>
        </div>
      </div>
    );
  }
}

export default TrackRow;
