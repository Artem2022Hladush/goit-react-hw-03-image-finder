import {BsSearch} from "react-icons/bs"
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

		if(this.state.inputText.trim() === '') {
			return;
		}
		this.props.onSubmit(this.state.inputText);
		this.setState({inputText: ''});
	}
	render() {
		return (
			<header className={css.Searchbar}>
		<form onSubmit={this.handleSublmit} className={css.SearchForm}>
			<button type="submit" className={css.SearchForm__button}>
				<BsSearch />
				<span className={css.SearchForm_button_label}></span>
			</button>
	
			<input
			className={css.SearchForm__input}
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