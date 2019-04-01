import React, { Component } from 'react';
import './App.module.css';

import Layout from './components/Layout/Layout';
import InfoPage from './containers/InfoPage/InfoPage';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <InfoPage></InfoPage>
        </Layout>
      </div>
    );
  }
}

export default App;
