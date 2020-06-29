import React from 'react'
import Layout from '../components/layout'
import Carousel from '../components/Carousel'
import brewStyles from './brew.module.scss'



const BrewPage = ()=> {
    return(
        <Layout>
            <div className={brewStyles.BrewPageDiv}>
                <div className={brewStyles.CarouselBrewLabel}>
                    <h2>FIND YOUR FAVORITE BREW STYLE HERE.</h2>
            <ul className={brewStyles.Brewul}>
                <li className={brewStyles.Brewli}>POUR-OVER | Hario V60</li>
                <li className={brewStyles.Brewli}>POUR-OVER | Chemex </li>
                <li className={brewStyles.Brewli}>ESPRESSO | Machine</li>
                <li className={brewStyles.Brewli}>ESPRESSO | Bialetti</li>
                </ul>
                </div>
                <Carousel className={brewStyles.CarouselItems}/>
            </div>
        </Layout>
    )
}

export default BrewPage;