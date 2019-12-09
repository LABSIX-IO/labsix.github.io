import React from "react"
import { Col, Container, Row } from "reactstrap"
import styles from "./Footer.module.scss"

const sizes = {
  md: 3,
  sm: 6,
  xs: 12,
}

export default function Header() {
  return (
    <Row tag="footer" className={styles.root + " " + "justify-content-center"}>
      <Col className={styles.contact} {...sizes}>
        <h6>Contact</h6>
        <ul>
          <li title="telefoon">
            <a href="tel:+31638931114">
              <i className="fa fa-phone" />
              +31 6 38 93 111 4
            </a>
          </li>
          <li title="telegram">
            <a href="https://telegram.me/midgethoen">
              <i className="fa fa-telegram" />
              @midgethoen
            </a>
          </li>
          <li title="e-mail">
            <a href="mailto:midge@lab6.io">
              <i className="fa fa-envelope" />
              midge@lab6.io
            </a>
          </li>
          <li title="adres">
            <i className="fa fa-building" />
            <pre>
              {`Leliestraat 11\n3135XJ Vlaardingen\n`}
              <span className={styles.light}>KVK 59066482</span>
            </pre>
          </li>
        </ul>
      </Col>
      <Col className={styles.social} {...sizes}>
        <h6>Volg LAB 6</h6>
        <ul>
          <li title="github">
            <a href="https://github.com/LABSIX-IO">
              <i className="fa fa-github" />
            </a>
          </li>
          <li title="twitter">
            <a href="https://twitter.com/labsix_io">
              <i className="fa fa-twitter" />
            </a>
          </li>
          {/* <li title="facebook">
            <a href="https://www.facebook.com/labsix.io/">
              <i className="fa fa-facebook-official" />
            </a>
          </li> */}
          <li title="linkedin">
            <a href="https://www.linkedin.com/company/18023800">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  )
}
