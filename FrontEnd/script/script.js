//---------------------------------------------------------------
//---------------intégration des éléments -----------------------
//---------------------------------------------------------------

const filters = document.getElementById("filters"); //récup de l'ID filters du HTML
const gallery = document.querySelector(".gallery"); //récup de la class gallery du HTML

fetch("http://localhost:5678/api/works") //récup des infos de l'API
  .then((response) => response.json()) //transformé en format JSON
  .then((data) => {
    data.forEach((works) => {
      const listPhotos = works.imageUrl; //récup dans une const des chemins d'images
      const nomPhotos = works.title; //récup dans une const des titles des photos
      const figure = document.createElement("figure"); //création d'une figure pour chaque éléments
      const img = document.createElement("img"); //création d'une image pour chaque éléments
      const figCaption = document.createElement("figcaption"); //création d'une figcaption pour chaque éléments
      img.src = listPhotos; //src des images
      img.alt = "image"; //nom alternatif
      figure.appendChild(img); //figure est le parent de img
      figure.appendChild(figCaption); //figure est le parent de figcaption
      gallery.appendChild(figure); //gallery est le parent de figure
      figure.insertAdjacentHTML("beforeend", nomPhotos); //insertion nom sous l'image
    });
  });
//console.log(work.imageUrl);
//console.log(data);
//console.table(work.category.name);

//---------------------------------------------------------------
//-----------intégration menu de catégories----------------------
//---------------------------------------------------------------

async function fetchCategoriesAndImages() {
  //creation d'une function asynchrone
  const [categoriesResponse, imagesResponse] = await Promise.all([
    //qui attend une promesse de réponse
    fetch("http://localhost:5678/api/categories"), //demande d'infos d'une 1ère API
    fetch("http://localhost:5678/api/works"), //demande d'infos d'une 2nde API en même temps
  ]);
  const categories = await categoriesResponse.json();
  const images = await imagesResponse.json();
  return { categories, images }; //on retourne les infos en format JSON
}

function getCategoriesWithImages(categories, images) {
  return categories.map((category) => {
    //parcourt les éléments dans leur ordre d'insertion
    return {
      ...category, //on éclate l'array category pour récup les ID
      images: images.filter((image) => image.categoryId === category.id),
    };
  });
}
fetchCategoriesAndImages().then(({ categories, images }) => {
  //appel de la fucntion créée
  const btnTous = document.createElement("button"); //creation btnTous
  btnTous.innerText = "Tous"; //on le nomme
  filters.appendChild(btnTous); //filters est son parent
  btnTous.addEventListener("click", () => {
    //on crée un évènement à son clic
    gallery.innerHTML = ""; //on efface toutes les images présentes précédemment
    for (i = 0; i < images.length; i++) {
      //on crée une boucle pour parcourir tous les éléments
      const nomPhotos = images[i].title; //création d'une const pour les titles
      const figure = document.createElement("figure"); //création d'une figure pour chaque éléments
      const img = document.createElement("img"); //création d'une image pour chaque éléments
      const figCaption = document.createElement("figcaption"); //création d'une figcaption
      img.src = images[i].imageUrl; //src des images
      img.alt = "image"; //nom alternatif
      figure.appendChild(img); //figure est le parent de img
      figure.appendChild(figCaption); //figure est le parent de figcaption
      gallery.appendChild(figure); //gallery est le parent de figure
      figure.insertAdjacentHTML("beforeend", nomPhotos); //insertion nom sous l'image
    }
  });

  const categoriesWithImages = getCategoriesWithImages(categories, images);
  console.log(categoriesWithImages); // 3 noms de familles incluant les 11 images
  console.log(categories); //3 noms des familles
  categoriesWithImages.forEach((newElement) => {
    //pour chaque élément des 3 familles...
    const button = document.createElement("button"); //...je crée un bouton...
    button.innerText = newElement.name; //...avec le nom de la photo...
    filters.appendChild(button); //...filters est le parent des 3 boutons
    // console.log(newElement);
    console.log(images);
    // console.log(newElement.id);
    // console.log(images[0].categoryId);
    button.addEventListener("click", () => {
      //création d'un évènement
      gallery.innerHTML = ""; //on enlève toutes les images
      for (i = 0; i < images.length; i++) {
        //création d'une boucle "for"
        if (newElement.id === images[i].categoryId) {
          //si l'ID de l'élément de la liste catégories === ID d'une image de la liste des 11 images
          const nomPhotos = images[i].title; //création d'une const pour les titles
          const img = document.createElement("img"); //création d'une const pour les img
          const figure = document.createElement("figure"); //création d'une const pour les figures
          const figCaption = document.createElement("figcaption"); //création d'une const pour les figcaptions
          img.src = images[i].imageUrl; //src de l'image "i"
          figure.appendChild(img); //figure est le parent de img
          figure.appendChild(figCaption); //figure est le parent de figcaption
          gallery.appendChild(figure); //gallery est le parent de figure
          figure.insertAdjacentHTML("beforeend", nomPhotos); //insertion nom sous l'image
        }
      }
    });
  });
});

//---------------------------------------------------------------
//--------------------------LOGIN--------------------------------
//---------------------------------------------------------------
document.getElementById("btn-login").addEventListener("click", () => {
  window.location.href = "./LogIn/login.html";
});

/*-------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
async function getCategories() {
  const btnTous = document.createElement("button");
  btnTous.innerText = "Tous";
  filters.appendChild(btnTous);

  const response = await fetch("http://localhost:5678/api/categories");
  const data = await response.json();
  data.forEach((element) => {
    const button = document.createElement("button");
    button.innerText = element.name;
    filters.appendChild(button);
    //console.log(data);
  });
}
getCategories();

async function getImages() {
  const newResponse = await fetch("http://localhost:5678/api/works");
  const newData = await newResponse.json();
  newData.forEach((newElement) => {
    const newElementId = newElement.categoryId;
    console.log(newElementId);
  });
}
getImages();
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!---------*/
/*
async function getCategories() {
  const btnTous = document.createElement("button");
  btnTous.innerText = "Tous";
  filters.appendChild(btnTous);
  try {
    const response = await fetch("http://localhost:5678/api/works");
    const data = await response.json();

    //console.log(data.length);
    for (i = 0; i < data.length; i++) {
      const newData = data[i].category.id;
      console.log(newData);

      const n = Object.keys(data);
      console.log(n);
    }*/
/*
    //inutile
    newData.forEach((element) => {
      if (element.categoryId !== 0) {
        const button = document.createElement("button");
        button.innerText = element.category.name;
        filters.appendChild(button);
        button.addEventListener("click", () => {
          const img = document.createElement("img");
          const figure = document.createElement("figure");
          const figCaption = document.createElement("figcaption");
          img.src = element.imageUrl;
          figCaption.innerText = element.title;
          gallery.innerHTML = "";
          figure.appendChild(img);
          figure.appendChild(figCaption);
          gallery.appendChild(figure);
        });
      }
    });
    */
//inutile
//}

//
//
//
//
// const projets = document.getElementById("projets");
// const btnTous = document.getElementById("1");
// const btnObjets = document.getElementById("2");
// const btnAppartements = document.getElementById("3");
// const btnHotelsEtRestaurants = document.getElementById("4");

// async function getObjets() {
//   // création fonction asynchrone pour la démarrer en attendant le retour de la promesse qui retourne le tableau "category"
//   const tri1 = await fetch("http://localhost:5678/api/categories"); // attente de la résolution de la promesse qu(on passe en const "tri1")
//   return await tri1.json(); // on convertit la const "a" en format .json pour être lisible par l'ordi avec await
// }
// getObjets();

// //---------------------------------------------------------------
// //-----------------------TOUS------------------------------------
// //---------------------------------------------------------------

// //ajouter transitions, autres photos, noms
// btnTous.addEventListener("click", () => {
//   gallery.innerHTML = "";
//   fetch("http://localhost:5678/api/works")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((works) => {
//         const listPhotos = works.imageUrl;
//         const nomPhotos = works.title;
//         const figure = document.createElement("figure");
//         const img = document.createElement("img");
//         const figCaption = document.createElement("figcaption");
//         img.src = listPhotos;
//         img.alt = "image";
//         figure.appendChild(img);
//         figure.appendChild(figCaption);
//         gallery.appendChild(figure);
//         figure.insertAdjacentHTML("beforeend", nomPhotos);
//       });
//     });
// });
// //---------------------------------------------------------------
// //-----------------------OBJETS----------------------------------
// //---------------------------------------------------------------

// btnObjets.addEventListener("click", (works) => {
//   async function afficherObjets() {
//     const arrayObjets = await getObjets();
//     const figure = document.createElement("figure");
//     const img = document.createElement("img");
//     const figCaption = document.createElement("figcaption");
//     fetch("http://localhost:5678/api/works").then((response) => response.json);
//     figCaption.textContent = works.name;
//     gallery.innerHTML = "";
//     figure.classList.add("img");
//     img.src = "http://localhost:5678/images/abajour-tahina1651286843956.png";
//     figure.appendChild(img);
//     figure.appendChild(figCaption);
//     gallery.appendChild(figure);
//     //console.log(arrayObjets);
//   }
//   afficherObjets();
// });
// //---------------------------------------------------------------
// //-----------------------APPARTEMENTS----------------------------
// //---------------------------------------------------------------

// btnAppartements.addEventListener("click", (works) => {
//   async function afficherAppartements() {
//     const arrayObjets = await getObjets();
//     const figure = document.createElement("figure");
//     const img = document.createElement("img");
//     const figCaption = document.createElement("figcaption");
//     fetch("http://localhost:5678/api/works").then((response) => response.json);
//     figCaption.textContent = works.name;
//     gallery.innerHTML = "";
//     figure.classList.add("img");
//     img.src =
//       "http://localhost:5678/images/appartement-paris-v1651287270508.png";
//     figure.appendChild(img);
//     figure.appendChild(figCaption);
//     gallery.appendChild(figure);
//     // console.log(arrayObjets);
//   }
//   afficherAppartements();
// });
// //---------------------------------------------------------------
// //-----------------------HOTELS ET RESTAURANTS-------------------
// //---------------------------------------------------------------

// btnHotelsEtRestaurants.addEventListener("click", (works) => {
//   async function afficherHotelsEtRestaurants() {
//     const arrayObjets = await getObjets();
//     const figure = document.createElement("figure");
//     const img = document.createElement("img");
//     const figCaption = document.createElement("figcaption");
//     fetch("http://localhost:5678/api/works").then((response) => response.json);
//     figCaption.textContent = works.name;
//     gallery.innerHTML = "";
//     figure.classList.add("img");
//     img.src =
//       "http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png";
//     figure.appendChild(img);
//     figure.appendChild(figCaption);
//     gallery.appendChild(figure);
//     //console.log(arrayObjets);
//   }
//   afficherHotelsEtRestaurants();
// });
//
//
//
//
//
//
//
//
//
//DON'T REMOVE BELLOWWWWWWWWWWWWWWWWWWWWWWWW
//
//
/*
let categories = []; // création d'un tableau vide qui se remplira dynamiquement

async function getCategories() {
  const btnTous = document.createElement("button");
  btnTous.innerText = "Tous";
  filters.appendChild(btnTous);
  try {
    const response = await fetch("http://localhost:5678/api/categories");
    const data = await response.json();
    data.forEach((element) => {
      const button = document.createElement("button");
      button.innerText = element.name;
      filters.appendChild(button);
      button.addEventListener("click", () => {
        console.log(response);
      });
    });
  } catch {}
}
getCategories();
*/
