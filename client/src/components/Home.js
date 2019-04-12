import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Spin } from 'antd';

const { Title } = Typography;

class Home extends Component {
  renderUserInfo() {
    const { data: { displayName }, isFetching } = this.props.currentUser;
    if (isFetching) {
      return (
        <div className='spin-container'>
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
