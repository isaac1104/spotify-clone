import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';

const { Title } = Typography;

class Home extends Component {
  render() {
    const { displayName, photo } = this.props.currentUser.data
    return (
      <div>
        <Title>Welcome, {displayName}</Title>
        <img src={photo} alt={displayName} />
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(Home);
