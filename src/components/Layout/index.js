import React, { Component } from "react"
import { Container, Row } from "reactstrap"
import Footer from "../Footer"
// import Navigation from "../Navigation"
import styles from "./index.module.scss"
import "./index.scss"
import SEO from "../seo"

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <SEO />
        <Container className={styles.root}>
          {/* <Navigation /> */}
          {children}
          <Footer />
        </Container>
      </>
    )
  }
}

export default Layout
