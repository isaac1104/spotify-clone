import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Spin } from 'antd';
import { fetchCurrentUserData } from '../actions';
import Sidebar from './Sidebar';
import SoundPlayer from './SoundPlayer';
import requireAuth from '../utils/requireAuth';
import ContentLayout from '../utils/ContentLayout';

const Landing = lazy(() => import('./Landing'));
const Library = lazy(() => import('./Library'));

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sidebar />
          <ContentLayout>
            <Suspense fallback={(
              <div className='spin-container'>
                <Spin size='large' />
              </div>
            )}>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => {
                    const { data } = this.props.currentUser;
                    if (data) {
                      return <Redirect to='/home' />;
                    } else {
                      return <Landing />;
                    }
                  }}
                />
                <Route exact path='/home' component={requireAuth(Library)} />
              </Switch>
            </Suspense>
          </ContentLayout>
          <SoundPlayer />
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps, { fetchCurrentUserData })(App);
