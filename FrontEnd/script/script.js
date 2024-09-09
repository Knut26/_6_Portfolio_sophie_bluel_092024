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
    });
  })
  .catch((error) => console.error(error));
//
//
//
// tentative de bouton de tri
const menuDeCategories = document.getElementById("menu-de-categories");

menuDeCategories.addEventListener("click", () => {
  const tri = Array.from(work.category.name);
  return work.category.name;
  console.log(tri);
});
