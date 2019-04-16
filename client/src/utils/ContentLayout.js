import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

class ContentLayout extends Component {
  render() {
    const { pathname } = window.location;
    const style = {
      layout: {
        height: '100vh',
        overflow: 'hidden'
      },
      content: {
        backgroundColor: '#0f0f0f',
        backgroundImage: 'linear-gradient(315deg, #2d3436 0%, #0f0f0f 74%)',
        margin: 0,
        width: '100%',
        height: '100%',
        padding: pathname === '/' ? 0 : 24,
        overflowY: pathname === '/' ? 'hidden' : 'scroll'
      }
    };

    return (
      <Layout style={style.layout}>
        <Content style={style.content}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default ContentLayout;
