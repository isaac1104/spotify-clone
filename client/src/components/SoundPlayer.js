import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import { Layout } from 'antd';

const { Footer } = Layout;

class SoundPlayer extends Component {
  renderSoundPlayer() {
    const { currentUser: { data }, currentSong: { data: { preview_url, album } }, savedTracks: { isFetching } } = this.props;
    const styles = {
      container: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#0f0f0f',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'start'
      }
    };

    if (isFetching) {
      return null;
    }

    if (data && album) {
      return (
        <Footer style={styles.container}>
          <img
            src={album.images[2].url}
            alt={album.name}
          />
          <AudioPlayer
            autoPlay={preview_url ? true : false}
            src={preview_url}
          />
        </Footer>
      );
    }

    return null;
  }

  render() {
    return (
      <>
        {this.renderSoundPlayer()}
      </>
    );
  }
}

const mapStateToProps = ({ currentUser, currentSong, savedTracks }) => {
  return {
    currentUser,
    currentSong,
    savedTracks
  };
};

export default connect(mapStateToProps)(SoundPlayer);
