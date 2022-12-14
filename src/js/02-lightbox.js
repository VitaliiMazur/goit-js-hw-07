import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const creatImgGallery = createGalleryBox(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", creatImgGallery);

function createGalleryBox(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </li>
      `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
