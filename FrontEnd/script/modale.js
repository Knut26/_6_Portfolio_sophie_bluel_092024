const openModal = function (e) {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute("href"));
  target.style.display = null;
  target.removeAttribute("aria-hidden");
  target.setAttribute("aria-modal", "true");
};

const linkModale = document.getElementById("link-modale");

linkModale.forEach((a) => {
  a.addEventListener("click", openModal);
  //création div test
  const test = document.createElement("div");
  test.className("test");
  test.innerHTML = "ceci est un test";
  linkModale.appendChild(test);
  //création div test
});
