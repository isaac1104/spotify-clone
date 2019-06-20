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
  <div style={styles.container} className='landing-container'>
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
