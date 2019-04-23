import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import logo from '../assets/logo.png';

const { Sider } = Layout;
const menuItems = [{ path: 'home', icon: 'home', text: 'Home' }];
const styles = {
  sidebar: {
    backgroundColor: '#0f0f0f',
    padding: '1.5em'
  },
  menu: {
    backgroundColor: '#0f0f0f'
  },
  logo: {
    width: '10em',
    marginBottom: '2em'
  }
};

class Sidebar extends Component {
  highlightMenu() {
    const { pathname } = window.location;
    if (pathname.includes('/home')) {
      return ['0'];
    } else {
      return ['0'];
    }
  };

  renderSidebarMenu(menuItems) {
    return menuItems.map(({ path, icon, text }, i) => (
      <Menu.Item key={i}>
        <Link to={`/${path}`}>
          <Icon type={icon} />
          <span className='nav-text'>{text}</span>
        </Link>
      </Menu.Item>
    ));
  };

  renderSidebar() {
    const { currentUser: { data }, savedTracks: { isFetching } } = this.props;

    if (isFetching) {
      return null;
    }

    if (data) {
      return (
        <Sider breakpoint='xl' collapsedWidth='0' style={styles.sidebar} width={230}>
          <img src={logo} alt='logo' style={styles.logo} />
          <Menu mode='inline' theme='dark' defaultSelectedKeys={this.highlightMenu()} style={styles.menu}>
            {this.renderSidebarMenu(menuItems)}
          </Menu>
        </Sider>
      );
    } else {
      return null;
    }
  }

  render() {
    return <Fragment>{this.renderSidebar()}</Fragment>;
  }
};

function mapStateToProps({ currentUser, savedTracks }) {
  return {
    currentUser,
    savedTracks
  };
};

export default connect(mapStateToProps, null)(Sidebar);
