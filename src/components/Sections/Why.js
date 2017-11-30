import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

import styles from './Sections.module.scss'

export default function WhatSection() {
  return (
    <article className={styles.whySection}>
      <Row>
        <Col md={{size:6}} tag='article'>
          <h2>WAAROM DAN?</h2>
          <p>Do minim quem veniam ullamco. Quae non probant, consequat nulla cillum ea quis
            non aliqua ea deserunt ut officia veniam nostrud excepteur, eiusmod aut quid est
            fugiat laborum se pariatur, o doctrina voluptatibus, tempor laborum adipisicing.
            Velit consequat relinqueret, ad pariatur a quamquam iis ad quis magna e
            cernantur se eiusmod irure pariatur admodum, anim cupidatat qui relinqueret,
            quid litteris a summis labore hic quid litteris e possumus, fabulas fore
            officia.</p>
        </Col>
      </Row>
    </article>
  )
}
