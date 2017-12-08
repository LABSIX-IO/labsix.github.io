import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

import styles from './Sections.module.scss'

export default function WhatSection() {
  return (
    <article className={styles.whySection}>
      <Row>
        <Col md={{size:6}} tag='article'>
          <h2>motivatie</h2>
          <p>We leven in een bijzondere tijd. Technologie beweegt sneller dan ooit en in is toegankelijk voor iedereen. Niet langer hoef je veel geld te hebben of wetenschapper te zijn.</p>
          <p>De wereld ligt aan de voeten van diegene die met moderne technieken op een creatieve manier met nieuwe oplossing komt.</p>
        </Col>
      </Row>
    </article>
  )
}

// Brain by Sergey Patutin from the Noun Project
// Cloud by Busy from the Noun Project
