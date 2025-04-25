import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value.trim();
        if (search) {
            onSubmit(search);
            e.target.reset();
        } else {
            toast.error('Please enter a search term');
        }
    };
    return (
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name='search'
                />
                <button className={css.button}
                    type="submit">Search
                </button>
            </form>
        </header>

    );
};

export default SearchBar;