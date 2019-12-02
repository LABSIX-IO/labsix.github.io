import React from "react"
import { Col, Row } from "reactstrap"
import styles from "./Sections.module.scss"

export default function WhatSection() {
  return (
    <Row tag="article" className={styles.whatSection}>
      <Col md={{ size: 6, offset: 6 }} tag="article">
        <h2>Wat doet LAB 6</h2>
        <p>
          LAB 6 schrijft software. We bouwen web- en native apps en de backends
          die daarbij horen. Maar in ons hart zijn we probleem oplossers. Het
          allerliefst helpen we jou de volgende killer-app te bouwen óf met een
          snel prototype bedrijfsprocessen stroomlijnen.
        </p>
      </Col>
    </Row>
  )
}
