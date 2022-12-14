import PropTypes from "prop-types";
import css from "../Button/Button.module.css"

const Button=({onLoadMore}) => {
	return (
		<button className={css.Button} type="submit" onClick={onLoadMore}>Load more</button>
	)
};

Button.propTypes={
	onLoadMore:PropTypes.func.isRequired,
}

export default Button;
