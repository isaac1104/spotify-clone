import React from 'react';
import { Button } from 'antd';
import logo from '../assets/logo.png';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0f0f0f',
    backgroundImage: 'linear-gradient(315deg, #2d3436 0%, #0f0f0f 74%)',
    textAlign: 'center'
  },
  logo: {
    width: '25em',
    marginBottom: '2em'
  }
};

const Landing = () => (
  <div style={styles.container}>
    <div>
      <div>
        <img src={logo} alt='logo' style={styles.logo} />
      </div>
      <Button
        block
        size='large'
        shape='round'
        href='/auth/spotify'
        className='login-btn'
      >
        Sign In
      </Button>
    </div>
  </div>
);

export default Landing;
