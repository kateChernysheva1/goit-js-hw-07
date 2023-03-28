import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const images = galleryItems
  .map((element) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</li>`;
  })
  .join("");

let instance;
gallery.innerHTML = images;
gallery.addEventListener("click", openImages);

function openImages(ev) {
  ev.preventDefault();
  console.log(ev);
  if (ev.target.nodeName === "IMG") {
    const link = ev.target.dataset.source;
    const alt = ev.target.alt;
    instance = basicLightbox.create(`<img src="${link}" alt="${alt}">`, {
      onShow: () => document.addEventListener("keydown", closeEsc),
    });
    instance.show();
  }
}

function closeEsc(e) {
  if (e.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", closeEsc);
  }
}
