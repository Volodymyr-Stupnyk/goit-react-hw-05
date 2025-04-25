import css from './ErroeMessage.module.css';

const ErrorMessage = () => {
    return (
        <p className={css.errorMessage}>Failed to load images. Please try again later.</p>
    )
};

export default ErrorMessage;