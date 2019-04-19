import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Button, Spin, Typography, Popover, List, Icon } from 'antd';
import { fetchSavedTracksData, fetchMoreTracks } from '../actions';
import TrackRow from './TrackRow';

const { Title } = Typography;

class Library extends Component {
  componentDidMount() {
    this.props.fetchSavedTracksData();
  }

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
            loadMore={data.next ? (
              <div className='loadmore-btn-container'>
                <Button
                  size='small'
                  shape='round'
                  className='loadmore-btn'
                  loading={isFetchingMore}
                  onClick={() => this.props.fetchMoreTracks(data.next)}
                >
                  Load More Songs
                </Button>
              </div>
            ): null}
          />
        </>
      );
    }

    return null;
  }

  render() {
    const styles = {
      tracksContainer: {
        padding: '0px 48px 36px',
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

export default connect(mapStateToProps, { fetchSavedTracksData, fetchMoreTracks })(Library);
