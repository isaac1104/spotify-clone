import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import { Layout } from 'antd';

const { Footer } = Layout;

class SoundPlayer extends Component {
  renderSoundPlayer() {
    const { data } = this.props.currentUser;
    const styles = {
      container: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }
    };

    if (data) {
      return (
        <Footer style={styles.container}>
          <AudioPlayer
            src="https://p.scdn.co/mp3-preview/29e19c68dd853994221a90103db28427f1185e33?cid=01c386a32bdf45e3b6054fc7e0ef05cf"
            onPlay={e => console.log("onPlay")}
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

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(SoundPlayer);
