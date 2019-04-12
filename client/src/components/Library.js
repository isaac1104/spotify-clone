import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin, Typography } from 'antd';
import { fetchSavedTracksData } from '../actions';
import TrackRow from './TrackRow';

const { Title } = Typography;

class Library extends Component {
  componentDidMount() {
    this.props.fetchSavedTracksData();
  }

  renderSavedTracks() {
    const { isFetching, data } = this.props.savedTracks;
    if (isFetching) {
      return (
        <div className='spin-container'>
          <Spin size='large' />
        </div>
      );
    }
    if (data.items) {
      return (
        <>
          <Title level={3} style={{ textAlign: 'center' }}>Favorite Songs</Title>
          {data.items.map(item => (
            <TrackRow key={item.track.id} data={item.track} />
          ))}
        </>
      );
    }

    return null;
  }

  render() {
    const styles = {
      tracksContainer: {
        padding: 36
      }
    };

    return (
      <div style={styles.tracksContainer}>
        {this.renderSavedTracks()}
      </div>
    );
  }
}

const mapStateToProps = ({ savedTracks }) => {
  return {
    savedTracks
  };
};

export default connect(mapStateToProps, { fetchSavedTracksData })(Library);
