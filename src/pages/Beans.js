import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import Layout from '../components/layout'
import './beans.css'
import BeansMap from '../posts/CoffeeMap.png'



const BeansPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields{
                slug
            }
        }
    }
}
}`)

    return(
        <Layout>
            <h1>Beans around the world</h1>
            <div className="Beans-div">
            <ul className="BeansPageStyle">
                {data.allMarkdownRemark.edges.map((edge)=> {
                    return(
                        <li className="BeansPageStyle">
                            <Link to={`../blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            </Link>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )

                })}
            </ul>
            <img src={BeansMap} alt="beansmap" className="BeansMap"/>
        </div>
        </Layout>
    )
}


export default BeansPage;