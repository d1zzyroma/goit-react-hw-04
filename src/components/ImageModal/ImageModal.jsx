
import Modal from 'react-modal';
import css from './ImageModal.module.css';

// Set the root element for accessibility
Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      closeTimeoutMS={300} 
    >
      {image && (
        <div className={css.content}>
          <img src={image} alt="" className={css.image} />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;

