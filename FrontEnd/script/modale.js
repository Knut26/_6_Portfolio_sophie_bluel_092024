// const openModal = function (e) {
//   e.preventDefault();
//   const target = document.querySelector(e.target.getAttribute("href"));
//   target.style.display = null;
//   target.removeAttribute("aria-hidden");
//   target.setAttribute("aria-modal", "true");
// };

// const linkModale = document.getElementById("link-modale");

// linkModale.forEach((a) => {
//   a.addEventListener("click", openModal);
//   //création div test
//   const test = document.createElement("div");
//   test.className("test");
//   test.innerHTML = "ceci est un test";
//   linkModale.appendChild(test);
//   //création div test
// });
const modale1 = document.querySelector(".modale-photos");

fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (i = 0; i < data.length; i++) {
      const img = document.createElement("img");
      img.className = "modale-img";
      const imageUrl = data[i].imageUrl;
      img.src = imageUrl;
      const divP = document.createElement("div");
      divP.innerHTML = '<p><i class="fa-regular fa-trash-can trash"></i></p>';
      divP.className = "trash";
      img.appendChild(divP);
      //modale1.appendChild(divP);
      modale1.appendChild(img);

      //test ajout trash can
      //   data.forEach(displayTrash);

      //   function displayTrash() {
      //    const p = document.createElement("p");
      //    p.innerHTML = '<i class="fa-solid fa-trash-can trash"></i>';
      //    p.className = "trash";
      //    img.appendChild(p);
      //   }
    }
  })

  .catch((error) => console.error(error));
