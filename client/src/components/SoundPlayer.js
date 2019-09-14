import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import AudioPlayer from 'react-h5-audio-player';
import { Avatar, Col, Layout } from 'antd';

const { Footer } = Layout;
const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '6em',
    backgroundColor: '#404041',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    padding: '1em 1.5em'
  }
};

class SoundPlayer extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.toggleSoundPlayer);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.toggleSoundPlayer);
  }

  toggleSoundPlayer = e => {
    const { data } = this.props.currentSong;
    if (e.keyCode === 32 && data) {
      e.preventDefault();
      return this.player.togglePlay();
    }
  }

  renderSoundPlayer() {
    const { currentUser: { data }, currentSong: { data: { preview_url, album } }, savedTracks: { isFetching } } = this.props;

    if (isFetching) {
      return null;
    }

    if (data) {
      return (
        <Footer style={styles.container}>
          <Col xs={0} sm={2} md={2} lg={2} xl={1}>
            {album ? (
              <Avatar
                size={64}
                src={album.images[2].url}
              />
            ) : <div />}
          </Col>
          <Col xs={24} sm={22} md={22} lg={22} xl={23}>
            <AudioPlayer
              autoPlay={preview_url ? true : false}
              src={preview_url}
              progressUpdateInterval={50}
              ref={c => (this.player = c)}
            />
          </Col>
        </Footer>
      );
    }

    return null;
  }

  renderDocumentTitle() {
    const { data } = this.props.currentSong;

    if (data) {
      return (
        <Helmet>
          <title>{data.name}</title>
        </Helmet>
      );
    }

    return null;
  }

  render() {
    return (
      <>
        {this.renderDocumentTitle()}
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
