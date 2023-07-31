// import * as bootstrap from 'bootstrap';

export function createMarkup(photos) {
  return photos
    .map(
      ({
        tags,
        webformatURL,
        largeImageURL,
      }) => {
        return /*html*/ `
            <a href='${largeImageURL}' class="card-link js-card-link">
            <div class="photo-card">
              <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" />
            </div>
            </a>`;
      }
    )
    .join('');
}
