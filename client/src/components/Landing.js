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
    color: '#1db954'
  },
  strike: {
    color: 'tomato'
  }
};

const Landing = () => (
  <div style={styles.container}>
    <div>
      <Title level={2} style={styles.text}>Welcome to Spotify <strike style={styles.strike}>Clone</strike></Title>
      <Button href='/auth/spotify'>Sign in with Spotify</Button>
    </div>
  </div>
);

export default Landing;
