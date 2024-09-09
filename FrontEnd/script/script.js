fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    const gallery = document.querySelector(".gallery");
    data.forEach((work) => {
      const listPhotos = work.imageUrl;
      const nomPhotos = work.title;
      const img = document.createElement("img");
      img.src = listPhotos;
      img.alt = "image";
      gallery.appendChild(img);
      gallery.insertAdjacentHTML("beforeend", nomPhotos);
      console.log(work.imageUrl);
    });
  })
  .catch((error) => console.error(error));
//ajouter picture
//tessst test
