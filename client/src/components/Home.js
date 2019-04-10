import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';

const { Text, Title } = Typography;

class Home extends Component {
  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <Title>Home</Title>
        <Text>Welcome</Text>
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
