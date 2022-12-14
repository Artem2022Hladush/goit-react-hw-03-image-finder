import css from "../ImageGalleryItem/ImageGalleryItem.module.css"
import PropTypes from "prop-types"

const ImageGalleryItem=({item})=> {
	return(
		<li className={css.ImageGalleryItem}>
					<img className={css.ImageGalleryItem__image} src={item.webformatURL} alt={item.tags}/>
				</li>
	)
};

ImageGalleryItem.propTypes={
	item:PropTypes.shape({
		 webformatURL: PropTypes.string.isRequired,
		 tags: PropTypes.string.isRequired,
		 largeImageURL: PropTypes.string.isRequired,
	}),
	
}

export default ImageGalleryItem;
