import { useEffect, useState } from "react";
import css from "./App.module.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { searchImages } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import { Circles } from 'react-loader-spinner';
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";


function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getImagesData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await searchImages(query, page);
        setData(prevData => [...prevData, ...response]);
        console.log(response);
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching images.');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      getImagesData();
    }
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setData([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery data={data} onImageClick={handleImageClick} />
          {data.length > 0 && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      <ImageModal image={selectedImage} onClose={handleCloseModal} />
      {loading && (
        <div className={css.load}>
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
}

export default App;
