import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types"
import css from "../ImageGallery/ImageGallery.module.css"

const ImageGallery=({items})=> {
	return (
		<ul className={css.ImageGallery}>
			{items.map(item=> (
				<ImageGalleryItem  key={item.id} item={item}/>
			))}
		</ul>
	)
};
ImageGallery.propTypes={
	images: PropTypes.arrayOf(
		 PropTypes.shape({
			id: PropTypes.number.isRequired,
			webformatURL: PropTypes.string.isRequired,
			tags: PropTypes.string.isRequired,
			largeImageURL: PropTypes.string.isRequired,
		 })
	  ),
	  
}

export default ImageGallery;