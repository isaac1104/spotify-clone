import React from 'react';
import { Button, Typography } from 'antd';

const { Title } = Typography;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0f0f0f',
    textAlign: 'center'
  },
  text: {
    color: '#ffffff'
  }
};

const Landing = () => (
  <div style={styles.container}>
    <div>
      <Title style={styles.text}>Welcome to Spotify Clone</Title>
      <Button href='/auth/spotify'>Sign in with Spotify</Button>
    </div>
  </div>
);

export default Landing;
