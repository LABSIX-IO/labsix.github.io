import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Link from 'gatsby-link'

import Header from 'components/Header'
import styles from './Page404.module.scss'

export default function Page404() {
  return (
    <div>
      <Container className={styles.root}>
        <h1>404</h1>
        <p className={styles.large}>Errr... What were you looking for?</p>
        <p><Link to='/'>take me home..</Link></p>
      </Container>
    </div>
  )
}
