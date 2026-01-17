import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'css-loader';



const gallery = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader');

// Створюємо екземпляр SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});

export function createGallery(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img 
              class="gallery-image" 
              src="${webformatURL}" 
              alt="${tags}" 
            />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span>${likes}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span>${views}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span>${comments}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span>${downloads}</span>
            </p>
          </div>
        </li>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loaderContainer.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderContainer.classList.add('is-hidden');
}