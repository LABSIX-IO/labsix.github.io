import React, { Component } from "react"
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap"
import { fadeRange } from "../../utils"
import Logo from "../Logo"
import styles from "./Navigation.module.scss"

const fadeShadow = fadeRange(0, 100)
const fadeLogo = fadeRange(150, 400)

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shadow: null,
      logo: null,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const { scrollY } = window
    this.setState({
      shadow: fadeShadow(scrollY),
      logo: fadeLogo(scrollY),
    })
  }

  render() {
    const { logo, shadow } = this.state

    let logoElement
    if (logo) {
      logoElement = (
        <Logo
          color="primary"
          width={undefined}
          height="28px"
          style={{ opacity: logo }}
        />
      )
    }

    let shadowStyle
    if (shadow) {
      shadowStyle = { boxShadow: `0 5px 20px rgba(0,0,0,${shadow * 0.2})` }
    }

    return (
      <Navbar
        style={shadowStyle}
        className={`${styles.root} fixed-top container`}
        color="white"
      >
        <NavbarBrand href="/">{logoElement}</NavbarBrand>
        <Nav className="">
          <NavItem>
            <NavLink href="#what">Wat</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#why">Waarom</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#who">Wie</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
