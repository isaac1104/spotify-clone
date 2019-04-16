import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Spin, Typography, Popover, List } from 'antd';
import { fetchSavedTracksData } from '../actions';
import TrackRow from './TrackRow';

const { Title } = Typography;

class Library extends Component {
  componentDidMount() {
    this.props.fetchSavedTracksData();
  }

  renderSavedTracks() {
    const { savedTracks: { isFetching, data }, currentUser: { data: { displayName, photo } } } = this.props;
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
          <Popover
            content={<a href='/api/signout'>Sign Out</a>}
            trigger='click'
            placement='left'
          >
            <Typography style={{ float: 'right' }}>
              <Avatar
                src={photo}
                alt={displayName}
                style={{ marginRight: '1em'}}
              />
              {displayName}
            </Typography>
          </Popover>
          <Title level={3} style={{ textAlign: 'center', clear: 'both' }}>Favorite Songs</Title>
          <List
            itemLayout='horizontal'
            dataSource={data.items}
            renderItem={item => <TrackRow key={item.track.id} data={item.track} />}
          />
        </>
      );
    }

    return null;
  }

  render() {
    const styles = {
      tracksContainer: {
        padding: '12px 48px 36px 48px',
        marginBottom: 50
      }
    };

    return (
      <div style={styles.tracksContainer}>
        {this.renderSavedTracks()}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser, savedTracks }) => {
  return {
    currentUser,
    savedTracks
  };
};

export default connect(mapStateToProps, { fetchSavedTracksData })(Library);
