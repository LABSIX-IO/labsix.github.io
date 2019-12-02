import React from "react"
import Logo from "../Logo"
import styles from "./Header.module.scss"
import { Row } from "reactstrap"

export default function Header() {
  return (
    <Row tag="header" className={styles.root}>
      <Logo className={styles.logo} />
      <h5 className={styles.subtitle}>SOFTWARE ONTWIKKELING</h5>
    </Row>
  )
}
