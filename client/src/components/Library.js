import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Button, Spin, Typography, Popover, List, Icon } from 'antd';
import { fetchSavedTracksData, fetchMoreTracks } from '../actions';
import TrackRow from './TrackRow';

const { Title } = Typography;
const styles = {
  tracksContainer: {
    padding: '0px 48px 36px',
    marginBottom: 50
  },
  signout: {
    btn: {
      float: 'right'
    },
    avatar: {
      marginRight: '1em'
    }
  },
  title: {
    textAlign: 'center',
    clear: 'both',
    fontSize: '1.25em'
  }
};

class Library extends Component {
  componentDidMount() {
    this.props.fetchSavedTracksData();
  }

  renderAvatar(photo, displayName) {
    return (
      <Popover
        content={<Button shape='round' href='/api/signout' className='signout-btn'>Sign Out</Button>}
        trigger='click'
        placement='left'
      >
        <Typography style={styles.signout.btn} className='user-avatar'>
          <Avatar
            src={photo}
            alt={displayName}
            style={styles.signout.avatar}
          />
          <span className='user-display-name'>{displayName}</span>
        </Typography>
      </Popover>
    );
  };

  renderLoadMoreBtn(isFetchingMore, next) {
    return (
      <div className='loadmore-btn-container'>
        <Button
          icon='more'
          size='small'
          shape='round'
          className='loadmore-btn'
          loading={isFetchingMore}
          onClick={() => this.props.fetchMoreTracks(next)}
        />
      </div>
    );
  };

  renderSavedTracks() {
    const { savedTracks: { isFetching, isFetchingMore, data }, currentUser: { data: { displayName, photo } } } = this.props;
    if (isFetching) {
      return (
        <div className='spin-container'>
          <Spin
            indicator={<Icon type='loading' />}
            size='large'
          />
        </div>
      );
    }

    if (data.items) {
      return (
        <>
          {this.renderAvatar(photo, displayName)}
          <Title level={4} style={styles.title}>FAVORITE SONGS</Title>
          <List
            itemLayout='horizontal'
            dataSource={data.items}
            renderItem={item => <TrackRow key={item.track.id} data={item.track} />}
            loadMore={data.next ? this.renderLoadMoreBtn(isFetchingMore, data.next) : null}
          />
        </>
      );
    };

    return null;
  }

  render() {
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

export default connect(mapStateToProps, { fetchSavedTracksData, fetchMoreTracks })(Library);
