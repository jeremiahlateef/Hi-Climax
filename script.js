const navBar = document.querySelector(".nav-button");
const showModal = document.querySelector(".hide");

// ********** modal ************
navBar.addEventListener("click", function () {
  showModal.classList.toggle("hide");
});

// ********** set date ************
// // select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// // ********** smooth scroll ************
const smoothScroll = document.querySelectorAll("#nav-links").forEach((el) =>
  el.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("scroll-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  })
);
