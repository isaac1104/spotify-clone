import React from 'react';
import Fade from 'react-reveal/Fade';
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
  },
  button: {
    backgroundColor: '#404041'
  }
};

const Landing = () => (
  <div style={styles.container}>
    <div>
      <Fade>
        <div>
          <img src={logo} alt='logo' style={styles.logo} />
        </div>
        <Button
          block
          size='large'
          shape='round'
          href='/auth/spotify'
          className='login-btn'
          style={styles.button}
        >
          Sign In
        </Button>
      </Fade>
    </div>
  </div>
);

export default Landing;
