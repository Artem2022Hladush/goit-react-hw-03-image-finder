import {Component} from "react"
import css from "../Modal/Modal.module.css"
import PropTypes from "prop-types"

class Modal extends Component{
static propTypes = {
	src: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
}

componentDidMount(){
	window.addEventListener('keydown', this.handleModal)
}

componentWillUnmount(){
	window.removeEventListener('keydown', this.handleModal)
}

handleModal=(e)=>{
		if(e.code === "Escape") {
			this.props.onClose();
		}
	
}

handleBackDropClick=e=>{
	if(e.currentTarget === e.target){
		this.props.onClose()
	}
}

	render(){
		return(
			<div className={css.Overlay} onClick={this.handleBackDropClick}>
	<div className={css.Modal}>
   	<img src={this.props.src} alt="largeImage" />
	</div>
</div>
		)
	}
}

export default Modal;