import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  // Перевірка на порожній рядок
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight'
    });
    return;
  }

  // Очищаємо попередню галерею
  clearGallery();

  // Показуємо лоадер
  showLoader();

  try {
    // Виконуємо запит
    const data = await getImagesByQuery(query);

    // Ховаємо лоадер
    hideLoader();

    // Перевіряємо чи є результати
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
      });
      return;
    }

    // Створюємо галерею
    createGallery(data.hits);

    // Очищаємо поле вводу
    form.reset();

  } catch (error) {
    hideLoader();
    
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
      position: 'topRight'
    });
    
    console.error('Error fetching images:', error);
  }
}