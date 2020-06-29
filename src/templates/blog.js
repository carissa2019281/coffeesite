import React from 'react' 
import Layout from '../components/layout.js'
import {graphql} from 'gatsby'
import BlogTemplateStyles from './blogTemplate.module.scss'
// import Colombia from '../posts/Coffee_Colombia-01.png'
// import CostaRica from '../posts/Coffee_CostaRica-01.png'
// import Ethiopia from '../posts/Coffee_Ethiopia-01.png'
// import PapaNewGuinea from '../posts/Coffee_PapaNewGuinea-01.png'


export const query = graphql`
    query($slug: String!){
    markdownRemark( 
      fields: {
      slug: {
        eq:$slug
      }
    }
    ) {
     
      frontmatter{
        title
        date
        
      }
    html
    }
  }`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div className={BlogTemplateStyles.countries} dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html} }></div>
        </Layout>
    )
}

export default Blog