import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import layoutStyles from './layout.module.scss'





const Footer = ()=>{
    const data = useStaticQuery (
    graphql`
    query {
        site{
            siteMetadata{
                author
                        }
                    }
}
`)
return(
        <footer className={layoutStyles.footer}> 
            <p> Created by {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Footer