import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import bodyStyles from '../components/body.module.scss'
import headerImg from '../posts/CoffeeSiteGraphic-01.png'
import layoutStyles from '../components/layout.module.scss'


const IndexPage = () => {
  return (
    <Layout>
      <h2>Want to brew coffee?</h2>
      <h4>This is the place to learn! Click on the tabs learn more.</h4>
      <img src={headerImg} alt='headerImg' className={layoutStyles.image} />
    </Layout>
  )
}

export default IndexPage;