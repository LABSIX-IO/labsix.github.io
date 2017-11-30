import React, { Component } from 'react';
import { findDOMNode} from 'react-dom'

import { Container, Col } from 'reactstrap';

import styles from './CaseStudies.module.scss'
import image from './placeholder.jpg'

const content = [
  {
    title: "Certhon 1",
    field: "Agriculture",
    summary: "Et voluptates eaque odit exercitationem aut et odio. Cumque ut veritatis omnis minus et sit. Commodi a ipsam aliquam aut doloremque. Quia nemo asperiores ut id et inventore aut delectus.",
    image,
  },
  {
    title: "Certhon 2",
    field: "Agriculture",
    summary: "Et voluptates eaque odit exercitationem aut et odio. Cumque ut veritatis omnis minus et sit. Commodi a ipsam aliquam aut doloremque. Quia nemo asperiores ut id et inventore aut delectus.",
    image,
  },
  {
    title: "Certhon 3",
    field: "Agriculture",
    summary: "Et voluptates eaque odit exercitationem aut et odio. Cumque ut veritatis omnis minus et sit. Commodi a ipsam aliquam aut doloremque. Quia nemo asperiores ut id et inventore aut delectus.",
    image,
  },
]

const getIndex = n => (n%content.length+content.length)%content.length

const m = 2
const Article = ({article, position}) => (
  <article>
    <div style={{ left: m*100*position+60 + '%' }}>
      <h3 className={styles.sectionTitle}>Case study</h3>
      <h4 className={styles.articleTitle}>
        {article.title}
      </h4>
      <p className={styles.field}>{article.field}</p>
      <p>{article.summary}</p>
    </div>
    <img style={{ left: m*100*position+9 + '%' }} src={article.image}/>
  </article>
)

export default class CaseStudies extends Component {
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
    const { uiVisible, currentArticle } = this.state
    const uiStyle = { opacity: uiVisible ? 100 : 0 }
    const article = content[0]

    const prevIdx = getIndex(currentArticle-1)
    const curIdx = getIndex(currentArticle)
    const nextIdx = getIndex(currentArticle+1)

    const articles = [
      //prev
      <Article
        key={currentArticle-1}
        article={content[prevIdx]}
        position={-1}
      />,
      //current
      <Article
        key={currentArticle}
        article={content[curIdx]}
        position={0}
      />,
      //next
      <Article
        key={currentArticle+1}
        article={content[nextIdx]}
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
