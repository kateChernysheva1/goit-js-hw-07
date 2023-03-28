import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const images = galleryItems
  .map((element) => {
    return `<li class="gallery__item">
   <a attr='123' class="gallery__link" href="${element.original}">
      <img class="gallery__image" src = "${element.preview}" alt="${element.description}" />
   </a>
</li>`;
  })
  .join("");

gallery.innerHTML = images;

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
