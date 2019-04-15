import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import { Layout } from 'antd';

const { Footer } = Layout;

class SoundPlayer extends Component {
  renderSoundPlayer() {
    const { currentUser, currentSong: { data } } = this.props;
    const styles = {
      container: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#0f0f0f',
        color: '#ffffff'
      }
    };

    if (currentUser.data) {
      return (
        <Footer style={styles.container}>
          <AudioPlayer
            autoPlay={data.preview_url ? true : false}
            src={data.preview_url}
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

const mapStateToProps = ({ currentUser, currentSong }) => {
  return {
    currentUser,
    currentSong
  };
};

export default connect(mapStateToProps)(SoundPlayer);
