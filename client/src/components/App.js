import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { fetchCurrentUserData } from '../actions';

const Landing = lazy(() => import('./Landing'));
const Home = lazy(() => import('./Home'));

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    const styles = {
      container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };

    return (
      <BrowserRouter>
        <Suspense fallback={(
          <div style={styles.container}>
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
            <Route exact path='/home' component={Home} />
          </Switch>
        </Suspense>
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
