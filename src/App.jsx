import { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { getImages } from './components/appi';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const App = () => {

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const pagesCountRef = useRef(0);
  const prevSearchRef = useRef('');

  useEffect(() => {
    if (!search) return;
    if (prevSearchRef.current === search && page === 1) return;
    addNextImages();
    prevSearchRef.current = search;
  }, [search, page]);

  const addNextImages = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await getImages(search, page);
      pagesCountRef.current = response.total_pages;
      setImages(prev => [...prev, ...response.results]);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = newSearch => {
    if (newSearch === search) return;
    setImages([]);
    setPage(1);
    setSearch(newSearch);
    pagesCountRef.current = 0;
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const shouldShowLoadMore =
    images.length > 0 && page < pagesCountRef.current && !isLoading;

  return (
    <>
      <Toaster toastOptions={{ error: { iconTheme: { primary: '#FFC107' } } }} position='top-right' />
      <SearchBar onSubmit={onSubmit} />
      {isError ? (
        <ErrorMessage />
      ) : (
        <>
          <ImageGallery
            images={images}
            setModalImage={setModalImage}
          />
          {shouldShowLoadMore && <LoadMoreBtn onLoadMore={onLoadMore} />}
        </>
      )}
      <Loader isLoading={isLoading} />
      <ImageModal
        image={modalImage}
        onClose={setModalImage}
      />
    </>
  );
};  

export default App; 
