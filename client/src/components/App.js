import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';

const Landing = lazy(() => import('./Landing'));
const Home = lazy(() => import('./Home'));

class App extends Component {
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
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
