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
    const styles = {
      container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };
    const { data: { displayName }, isFetching } = this.props.currentUser;
    if (isFetching) {
      return (
        <div style={styles.container}>
          <Spin size='large' />
        </div>
      );
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
