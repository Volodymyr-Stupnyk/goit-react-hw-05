import css from './ImageModal.module.css';
import ReactModal from 'react-modal';

const ImageModal = ({ image, onClose }) => {
    return (
        <ReactModal
            isOpen={!!image}
            onRequestClose={() => onClose(null)}
            overlayClassName={css.overlay}
            className={css.modal}
        >
            {image && (
                <div className={css.content}>
                    <img src={image.urls.regular} alt={image.alt_description} />
                    <p><strong>Author</strong> {image.user.name}</p>
                    <p><strong>Likes</strong> {image.likes}</p>
                    {image.alt_description && (
                        <p><strong>Description</strong> {image.alt_description}</p>
                    )}
                </div>
            )}
        </ReactModal>
    );
};

export default ImageModal;