import css from "../ImageGalleryItem/ImageGalleryItem.module.css"
import PropTypes from "prop-types"

const ImageGalleryItem=({item, onClick})=> {
	return(
		<li className={css.ImageGalleryItem}>
					<img className={css.ImageGalleryItem__image} src={item.webformatURL} alt={item.tags} onClick={()=>onClick(item.largeImageURL)}/>
				</li>
	)
};

ImageGalleryItem.propTypes={
	item:PropTypes.shape({
		webformatURL: PropTypes.string.isRequired,
		tags: PropTypes.string.isRequired,
		largeImageURL: PropTypes.string.isRequired,
	}),
	onClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
