import css from './ImageCard.module.css';

const ImageCard = ({ imageSmall, imageLarge, onClick }) => {
  return (
    <div className={css.imageCard} >
      <img src={imageSmall} alt="" className={css.image} onClick={() => onClick(imageLarge)}/>
    </div>
  );
};

export default ImageCard;
