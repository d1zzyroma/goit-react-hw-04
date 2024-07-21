import css from './ImageCard.module.css';

const ImageCard = ({ imageSmall, imageLarge, onClick }) => {
  return (
    <div className={css.imageCard} onClick={() => onClick(imageLarge)}>
      <img src={imageSmall} alt="" className={css.image} />
    </div>
  );
};

export default ImageCard;
