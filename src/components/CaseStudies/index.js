import classNames from "classnames"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { findDOMNode } from "react-dom"
import { Row } from "reactstrap"
import styles from "./CaseStudies.module.scss"
import placeholder from "./placeholder.jpg"

const getRollingIndex = count => n => ((n % count) + count) % count

const m = 2
const Article = ({ article, position, className }) => (
  <article className={className}>
    <div className={styles.text} style={{ right: m * 100 * -position + "%" }}>
      <h3 className={styles.sectionTitle}>Case study</h3>
      <h4 className={styles.articleTitle}>{article.title}</h4>
      <p className={styles.field}>{article.field}</p>
      <p>{article.summary}</p>
    </div>
    <div className={styles.img} style={{ left: m * 100 * position + "%" }}>
      <img
        alt={article.title}
        src={
          (article.image && article.image.childImageSharp.resize.src) ||
          placeholder
        }
      />
    </div>
  </article>
)

export default class CaseStudies extends Component {
  static propTypes = {
    cases: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      uiVisible: false,
      isStatic: true,
      renderOffPage: false,
      currentArticle: 0,
    }
  }

  handleMouseEnter = () => {
    this.setState({ uiVisible: true })
  }

  handleMouseLeave = () => {
    this.setState({ uiVisible: false })
  }

  handleResize = () => {
    const currentArticle = findDOMNode(this).querySelector(
      "." + styles.currentArticle
    )

    this.setState({
      isStatic: false,
      height: currentArticle.clientHeight,
    })
  }

  startInterval() {
    if (!this._intervalId) {
      this._intervalId = setInterval(() => {
        this.setState({
          currentArticle: this.state.currentArticle + 1,
        })
      }, 8000)
    }
  }

  stopInterval() {
    if (this._intervalId) {
      clearInterval(this._intervalId)
    }
  }

  componentDidMount() {
    const containerElement = findDOMNode(this)
    containerElement.addEventListener("mouseenter", this.handleMouseEnter)
    containerElement.addEventListener("mouseleave", this.handleMouseLeave)
    window.addEventListener("resize", this.handleResize)

    // not sure what's going on,
    //  the height changes after the component has mounted
    //  wait 100ms for it to stabelize
    setTimeout(this.handleResize, 100)
    this.startInterval()
  }
  componentWillUnmount() {
    this.stopInterval()
    const containerElement = findDOMNode(this)
    containerElement.removeEventListener("mouseenter", this.handleMouseEnter)
    containerElement.removeEventListener("mouseleave", this.handleMouseLeave)
    window.removeEventListener("resize", this.handleResize)
  }

  handleNext = () => {
    this.stopInterval()
    this.setState({
      currentArticle: this.state.currentArticle + 1,
    })
  }

  handlePrev = () => {
    this.stopInterval()
    this.setState({
      currentArticle: this.state.currentArticle - 1,
    })
  }

  render() {
    const { cases } = this.props
    const { uiVisible, currentArticle, isStatic, height } = this.state
    const uiStyle = { opacity: uiVisible ? 100 : 0 }
    const getIdx = getRollingIndex(cases.length)

    const prevIdx = getIdx(currentArticle - 1)
    const curIdx = getIdx(currentArticle)
    const nextIdx = getIdx(currentArticle + 1)

    const articles = [
      //prev
      <Article
        key={currentArticle - 1}
        article={cases[prevIdx]}
        position={-1}
      />,
      //current
      <Article
        key={currentArticle}
        className={styles.currentArticle}
        article={cases[curIdx]}
        position={0}
      />,
      //next
      <Article
        key={currentArticle + 1}
        article={cases[nextIdx]}
        position={1}
      />,
    ]

    let containerStyle
    if (!isStatic) {
      containerStyle = { height: height }
    }

    return (
      <Row
        style={containerStyle}
        className={classNames(styles.root, !isStatic && styles.live)}
      >
        {articles}
        <button
          className={styles.previousButton}
          style={uiStyle}
          onClick={this.handlePrev}
        >
          <i className="fa fa-chevron-left" />
        </button>
        <button
          className={styles.nextButton}
          style={uiStyle}
          onClick={this.handleNext}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </Row>
    )
  }
}
