import React, { Component } from 'react';
import { Typography } from 'antd';

const { Text, Title } = Typography;

class Home extends Component {
  render() {
    return (
      <div>
        <Title>Home</Title>
        <Text>Welcome</Text>
      </div>
    );
  }
}

export default Home;
