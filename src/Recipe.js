import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, ingredients})=>{
	return(
		<div className={style.recipe}>
			<h1>{title}</h1>
			<p><span className={style.calories}>Number of calories in each Serving:</span> {calories}</p>
			<img src={image} alt="" />
			<h3 className={style.ingredients}>Ingredients</h3>
			<ul>
				{ingredients.map(ingredient => (
					<li>{ingredient.text}</li>
				))
				}
			</ul>
		</div>
	);
};

export default Recipe;