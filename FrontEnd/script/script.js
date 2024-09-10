fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    const gallery = document.querySelector(".gallery");
    data.forEach((work) => {
      const listPhotos = work.imageUrl;
      const nomPhotos = work.title;
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figCaption = document.createElement("figcaption");
      img.src = listPhotos;
      img.alt = "image";
      figure.appendChild(img);
      figure.appendChild(figCaption);
      gallery.appendChild(figure);
      figure.insertAdjacentHTML("beforeend", nomPhotos);
      //console.log(work.imageUrl);
      //console.log(data);
      //console.table(work.category.name);
      //--------------------------------------------------
      //--------------------------------------------------
      //--------------------------------------------------
      //intégration menu de catégories
      const tous = document.getElementById("1");
      const objets = document.getElementById("2");
      const appartements = document.getElementById("3");
      const hotelsEtAppartements = document.getElementById("4");

      objets.addEventListener("click", () => {
        const projetsObjets = work.category;
        gallery.innerHTML = projetsObjets;
        console.log(work.category.name);
      });
      //console.log(work.category.name);
    });
  })
  .catch((error) => console.error(error));
/*

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
// tentative de bouton de tri

//   function filterImages() {
//     for (i = 0; i < work.category.name; i++) {
//       const imagesContainer = document.querySelector(".gallery");
//       imagesContainer.innerHTML = ""; // vide le container des images
//       imagesContainer.forEach((image) => {
//         if (image.gallery.category.name === "objets") {
//           const imagesElements = document.createElement("img");
//           imagesElements.src = work.category.imageUrl;
//           imagesElements.alt = `work.category.name${filterImages}`;
//           imagesElements.classList.add("image-container");
//           imagesElements.style.display = "Block";
//           imagesContainer.appendChild(imagesElements);
//         }
//       });
//     }
//     filterImages(i);
//   }
//identifier les images pour accéder aux !==tes catégories

/*
menuDeCategories.addEventListener("click", () => {
  const tri = Array.from(work.category.name);
  return work.category.name;
  console.log(tri);
});

*/
