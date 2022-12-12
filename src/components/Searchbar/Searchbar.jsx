import {HiSearch} from "react-icons/hs"
import React, { Component } from "react";
import css from "../Searchbar/Searchbar.module.css"
import PropTypes from "prop-types"



class Searchbar extends Component{
	state= {
		inputText: '',
	}

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};
	
	handleChange=e=> {
		this.setState({inputText: e.currentTarget.value.toLowerCase()})
	}

	handleSublmit=e=>{
		e.preventDefault();

		// this.props.onSubmit(this.state.inputText);
		this.setState({inputText: ''});
	}
	render() {
		return (
			<header className={css.searchbar}>
		<form onSubmit={this.handleSublmit} className={css.searchform}>
			<button type="submit" className={css.searchform__button}>
				<HiSearch />
				<span className={css.searchform_button_label}>Search</span>
			</button>
	
			<input
			className={css.searchsorm__input}
			type="text"
			value={this.state.inputText}
			autoComplete="off"
			autoFocus
			placeholder="Search images and photos"
			onChange={this.handleChange}
			/>
		</form>
	</header>
		)
	}
	
};

export default Searchbar;