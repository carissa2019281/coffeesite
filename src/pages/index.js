import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Carousel from '../components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => {
  return (
    <Layout>
      <h1>Want to brew coffee?</h1>
      <h2>This is the place to learn! Click on the tabs learn more.</h2>
      <Carousel />
    </Layout>
  )
}

export default IndexPage;