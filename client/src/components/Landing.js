import React from 'react';
import { Button } from 'antd';
import logo from '../assets/logo.png';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'linear-gradient( 117.5deg,  rgba(89,233,162,1) 20.5%, rgba(29,209,185,1) 100.2% )',
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
