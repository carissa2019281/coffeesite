import React, { Component } from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout'
import axios from 'axios'
import recipeStyles from './recipe.module.scss'



class RecipesPage extends Component {
  constructor(props){
    super(props);
    this.state = {
    data: {
      hits: []
    },

    query: ''
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this)

  }

  handleChange(evt) {
    this.setState({
      query: evt.target.value
    });
  }

  handleClick(evt){
    evt.preventDefault();
    axios
      .get(`https://api.edamam.com/search?q=${this.state.query}&app_id=62b168c3&app_key=28781037b3cbf02a9e683ef73697eacf&from=0&to=3
      `)
      .then((response) => this.setState({ data: response.data }));
  }
  // handleUpdate(evt) {
  //   evt.preventDefault();
  //   this.setState({ query: false });
  // }
  
  // componentDidMount(){    
    
  // }
  

  render(){
    return(
        <Layout>
          <h1>Recipes</h1>
          <h3> recipes listed here!</h3>
          

<form className={recipeStyles.recipeForm} >
            <input
              type='text'
              value={this.state.query}
              name='recipe search'
              onChange={this.handleChange}
        
            />
            <button onClick={this.handleClick}>Search</button>
          </form>
            <div className={recipeStyles.recipeContainer}>        
          {this.state.data.hits.map(hit => (
                 <div className={recipeStyles.recipeItem}>
                   <div className={recipeStyles.recipeText}>
                    <Link to={hit.recipe.url}><h2>{hit.recipe.label}</h2> </Link>
                    <h4>Calories: {hit.recipe.calories}</h4>
                        </div>
                        <img src={hit.recipe.image} className={recipeStyles.recipeImage}/>
                  </div>
                  
                 ) )} 
                </div>
        </Layout>
    )
}}


export default RecipesPage;