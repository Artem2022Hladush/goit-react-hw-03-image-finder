import React, { Component } from "react";
import css from "../Searchbar/Searchbar.module.css"

class Searchbar extends Component{

	render() {
		return (
			<header className={css.searchbar}>
		<form className={css.searchform}>
			<button type="submit" className={css.searchform__button}>
				<span className={css.searchform_button_label}>Search</span>
			</button>
	
			<input
			className={css.searchsorm__input}
			type="text"
			autoComplete="off"
			autoFocus
			placeholder="Search images and photos"
			/>
		</form>
	</header>
		)
	}
	
};

export default Searchbar;