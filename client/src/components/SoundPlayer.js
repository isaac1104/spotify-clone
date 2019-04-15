import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import { Col, Layout } from 'antd';

const { Footer } = Layout;

class SoundPlayer extends Component {
  renderSoundPlayer() {
    const { currentUser: { data }, currentSong: { data: { preview_url, album } }, savedTracks: { isFetching } } = this.props;
    const styles = {
      container: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '5.5em',
        backgroundColor: '#2f3136',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center'
      }
    };

    if (isFetching) {
      return null;
    }

    if (data) {
      return (
        <Footer style={styles.container}>
          <Col xs={0} sm={2} md={2} lg={2} xl={1}>
            {album ? (
              <img
                src={album.images[2].url}
                alt={album.name}
              />
            ) : <div />}
          </Col>
          <Col xs={24} sm={22} md={22} lg={22} xl={23}>
            <AudioPlayer
              autoPlay={preview_url ? true : false}
              src={preview_url}
            />
          </Col>
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
