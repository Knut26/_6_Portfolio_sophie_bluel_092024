document.addEventListener("DOMContentLoaded", () => {
  //
  //
  //---------------------------------------------------------------
  //---------------intégration des 11 éléments---------------------
  //---------------------------------------------------------------
  //
  //
  const filters = document.getElementById("filters"); //récup de l'ID filters du HTML
  const gallery = document.getElementById("gallery"); //récup de la class gallery du HTML

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
  //
  //
  //---------------------------------------------------------------
  //-----------intégration menu de catégories----------------------
  //---------------------------------------------------------------
  //
  //
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
    if (sessionStorage.authToken) {
      //si session admin ...
      btnTous.style.visibility = "hidden"; //...btn invisible
    }
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
    //console.log(categoriesWithImages); // 3 noms de familles incluant les 11 images
    //console.log(categories); //3 noms des familles
    categoriesWithImages.forEach((newElement) => {
      //pour chaque élément des 3 familles...
      const button = document.createElement("button"); //...je crée un bouton...
      button.innerText = newElement.name; //...avec le nom de la photo...
      filters.appendChild(button); //...filters est le parent des 3 boutons
      if (sessionStorage.authToken) {
        //si session admin ...
        button.style.visibility = "hidden"; //...btn invisible
      }
      // console.log(newElement);
      // console.log(button);
      // console.log(images);
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
});
//
//
//---------------------------------------------------------------
//----------------mode administrateur----------------------------
//---------------------------------------------------------------
//
//
function logout() {
  sessionStorage.removeItem("authToken"); //... on déco et efface le token de sessionStorage
  window.location.href = "./login.html";
}

function adminMode() {
  //crée function en cas de validation des identifiants de connexion
  if (sessionStorage.authToken) {
    //si le token est valide et donc enregistré en session temporaire
    //------------------BANNIERE-----------------------------------------
    const editBanner = document.createElement("div"); //crée une div bannière (sticky)
    editBanner.className = "edit-banner";
    editBanner.innerHTML =
      '<p><i class="fa-regular fa-pen-to-square icone"></i>Mode édition</p>';
    const bodyIndex = document.querySelector(".body-index");
    bodyIndex.prepend(editBanner); //qu'on affiche avant le body

    //---------------BOUTON MODIF AVEC MODALE----------------------------
    const editBanner2 = document.createElement("div"); //crée une div "modifier"...
    editBanner2.className = "edit-banner2";
    editBanner2.innerHTML =
      '<a href="#modale" id="link-modale" aria-hidden="true"><i class="fa-regular fa-pen-to-square icone2"></i>modifier</a>';
    titreProjets = document.querySelector(".titre-projets");
    titreProjets.appendChild(editBanner2); //...qu'on affiche après le titre "Projets"
    // const modale = document.createElement("div");
    // modale.className = "modale";
    // modale.style.display = "none";
    // //modale.classList = 'aria-hidden="true"';
    // modale.innerHTML = "Galerie photo";
    // editBanner2.appendChild(modale);

    const btnLogout = document.getElementById("btn-login"); //on change login en logout
    btnLogout.innerHTML = "logout";
    btnLogout.addEventListener("click", logout);
  }
  // checkCurrentPage(); //appel de la fonction déco si on quitte index.html
}

adminMode(); //appel fonction mode édition
//
//FAIRE DISPARAITRE DE BASE LA MODALE
//PUIS CREER UN ADDEVENT SUR LE "MODIFIER" ET ENLEVER LE DISPLAY NONE
//PUIS ACTIVER LA FERMETURE DE LA MODALE AVEC LA CROIX
//PUIS ADDEVENT SUR LE "AJOUTER UNE PHOTO"
//BIEN PLACER LES TRASHS CANS
//ADDEVENT SUR LES TRASHS CANS
//RENDRE REELLE LA SUPPRESSION DES PHOTOS EN FONCTIONS DES CLICS DE LA MODALE.../
// 1
// banière mode édition qui ne fait plus toute la largeur de index.html
//
// 2
// centrer lien modale "modifier" sur index.html
//
// 3
//
//
