import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { findDOMNode} from 'react-dom'

import { Container, Col } from 'reactstrap';

import styles from './CaseStudies.module.scss'
import placeholder from './placeholder.jpg'

const getRollingIndex = count => n => (n%count+count)%count

const m = 2
const Article = ({article, position}) => (
  <article>
    <div style={{ left: m*100*position+58 + '%' }}>
      <h3 className={styles.sectionTitle}>Case study</h3>
      <h4 className={styles.articleTitle}>
        {article.title}
      </h4>
      <p className={styles.field}>{article.field}</p>
      <p>{article.summary}</p>
    </div>
    <img
      style={{ left: m*100*position+9 + '%' }}
      src={article.image && article.image.childImageSharp.resize.src || placeholder}
    />
  </article>
)

export default class CaseStudies extends Component {

  static propTypes = {
    cases: PropTypes.array.isRequired,
  }

  constructor(props){
    super(props)
    this.state = {
      uiVisible: false,
      renderOffPage: false,
      currentArticle: 0
    }
  }

  componentDidMount() {
    const containerElement = findDOMNode(this)
    containerElement.addEventListener(
      "mouseenter",
      () => this.setState({uiVisible: true})
    )
    containerElement.addEventListener(
      "mouseleave",
      () => this.setState({uiVisible: false})
    )
  }

  handleNext = () => {
    this.setState({
      currentArticle: this.state.currentArticle+1
    })
  }

  handlePrev = () => {
    this.setState({
      currentArticle: this.state.currentArticle-1
    })
  }

  render (){
    const { cases } = this.props
    const { uiVisible, currentArticle } = this.state
    const uiStyle = { opacity: uiVisible ? 100 : 0 }
    const getIdx = getRollingIndex(cases.length)

    const prevIdx = getIdx(currentArticle-1)
    const curIdx = getIdx(currentArticle)
    const nextIdx = getIdx(currentArticle+1)

    const articles = [
      //prev
      <Article
        key={currentArticle-1}
        article={cases[prevIdx]}
        position={-1}
      />,
      //current
      <Article
        key={currentArticle}
        article={cases[curIdx]}
        position={0}
      />,
      //next
      <Article
        key={currentArticle+1}
        article={cases[nextIdx]}
        position={1}
      />
    ]

    return (
      <Container className={styles.root} >
        <button
          className={styles.previousButton}
          style={uiStyle}
          onClick={this.handlePrev}
        ><i className='fa fa-chevron-left'/></button>
        <button
          className={styles.nextButton}
          style={uiStyle}
          onClick={this.handleNext}
        ><i className='fa fa-chevron-right'/></button>
        {articles}
      </Container>
    )
  }
}
