import { BarLoader } from 'react-spinners'
import css from './Loader.module.css'

const Loader = ({ isLoading }) => {
    return (
        <div className={css.container}>
            {isLoading && <BarLoader cssOverride={css.loader} />}
        </div>
    )
};

export default Loader