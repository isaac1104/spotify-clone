import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0f0f0f',
    color: '#ffffff',
    textAlign: 'center'
  }
};

const Landing = () => (
  <div style={styles.container}>
    <div>
      <h1>Welcome to Spotify Clone</h1>
    </div>
  </div>
);

export default Landing;
