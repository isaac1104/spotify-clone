import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Spin } from 'antd';

const { Title } = Typography;

class Home extends Component {
  renderUserInfo() {
    const { data: { displayName, photo }, isFetching } = this.props.currentUser;
    if (isFetching) {
      return <Spin size='large' />;
    }

    return (
      <div>
        <Title>Welcome, {displayName}</Title>
        <img src={photo} alt={displayName} />
      </div>
    );
  }

  render() {
    return (
      <>
        {this.renderUserInfo()}
      </>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(Home);
