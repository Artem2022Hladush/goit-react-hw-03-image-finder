import {Component} from "react"
import css from "../Modal/Modal.module.css"
import PropTypes from "prop-types"

class Modal extends Component{
static propTypes = {
	src: PropTypes.string.isRequired
}
	render(){
		return(
			<div className={css.Overlay}>
  <div className={css.Modal}>
    <img src={this.props.src} alt="largeImage" />
  </div>
</div>
		)
	}
}

export default Modal;