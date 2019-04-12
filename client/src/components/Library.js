import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin, Typography } from 'antd';
import { fetchSavedTracksData } from '../actions';

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
    return (
      <div>
        <Title level={3}>Your Library</Title>
      </div>
    )
  }

  render() {
    console.log(this.props.savedTracks);
    return (
      <>
        {this.renderSavedTracks()}
      </>
    );
  }
}

const mapStateToProps = ({ savedTracks }) => {
  return {
    savedTracks
  };
};

export default connect(mapStateToProps, { fetchSavedTracksData })(Library);
