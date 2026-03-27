import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';


const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
}

const errorMessage = {
  message: `Sorry, there are no images matching your search query. Please try again!`,
  position: 'topRight',
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})

refs.form.addEventListener('submit', function(e) {
  e.preventDefault();
  clearGallery(refs.gallery)
  showLoader()
  const formData = new FormData(refs.form);
  const query = formData.get('search-text');
  getImagesByQuery(query)
    .then(data => handleThen(data))
    .catch(error => console.log(error))
    .finally(() => hideLoader())

});

function handleThen(data) {
  const hits = data.hits

  if (hits.length === 0) {
    iziToast.error(errorMessage);
    return;
  }

  createGallery(hits)
  lightbox.refresh();
}