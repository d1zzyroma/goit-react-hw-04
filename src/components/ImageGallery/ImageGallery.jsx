import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ data, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {data.map(element => (
        <li key={element.id}>
          <ImageCard 
            imageSmall={element.urls.small} 
            imageLarge={element.urls.full} 
            onClick={onImageClick} 
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
