import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const creatImgGallery = createGalleryBox(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", creatImgGallery);

function createGalleryBox(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
    `;
    })
    .join("");
}

galleryBox.addEventListener("click", onGalleryBox);

const createNewSrc = basicLightbox.create(`<img src=""/>`);

function onGalleryBox(evt) {
  evt.preventDefault();

  const isGalleryImage = evt.target.classList.contains("gallery__image");

  if (!isGalleryImage) return;
  console.log(evt.target);

  let selectedPicture = evt.target.dataset.source;

  const modalPic = createNewSrc.element().querySelector("img");
  modalPic.src = selectedPicture;
  createNewSrc.show();
}
