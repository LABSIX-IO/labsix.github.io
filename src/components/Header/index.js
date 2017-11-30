import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Logo from '../Logo'

import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={`container ${styles.root}`}>
        <Logo/>
        <h5>SOFTWARE ONTWIKKELING</h5>
    </header>
  )
}
