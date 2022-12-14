import PropTypes from "prop-types";

const Button=({onLoadMore}) => {
	return (
		<button type="submit" onClick={onLoadMore}>Load more</button>
	)
};

Button.propTypes={
	onLoadMore:PropTypes.func.isRequired,
}

export default Button;
