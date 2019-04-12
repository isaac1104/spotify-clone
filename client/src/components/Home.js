import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Spin } from 'antd';
import { fetchSavedTracksData } from '../actions';

const { Title } = Typography;

class Home extends Component {
  componentDidMount() {
    this.props.fetchSavedTracksData();
  }

  renderUserInfo() {
    const { data: { displayName }, isFetching } = this.props.currentUser;
    if (isFetching) {
      return <Spin size='large' />;
    }

    return (
      <div>
        <Title>Made for {displayName.split(' ')[0]}</Title>
      </div>
    );
  }

  render() {
    console.log(this.props.savedTracks);
    return (
      <>
        {this.renderUserInfo()}
      </>
    );
  }
}

const mapStateToProps = ({ currentUser, savedTracks }) => {
  return {
    currentUser,
    savedTracks
  };
};

export default connect(mapStateToProps, { fetchSavedTracksData })(Home);
