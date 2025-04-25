import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';


const ImageGallery = ({ images, setModalImage }) => {
    return (
        <ul className={css.gallerylist}>
            {images.map(image => (
                <li className={css.item} key={image.id}>
                    <ImageCard
                        image={image}
                        onClick={setModalImage}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;