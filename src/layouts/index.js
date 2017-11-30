import React, { Component } from 'react';
import {Container } from 'reactstrap';

import './index.scss';

import styles from './index.module.scss'

import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <Container className={styles.root}>
        <Navigation />
        {children()}
        <Footer/>
      </Container>
    );
  }
}

export default App;
