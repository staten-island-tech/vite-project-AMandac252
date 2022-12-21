import "../styles/style.css";
import { songlist } from "../js/songlist";
import AOS from "aos";
``;
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  display: document.querySelector(".display"),
  angel: document.querySelector(".angel-btn"),
  vampire: document.querySelector(".vampire-btn"),
  orignal: document.querySelector(".ori-btn"),
  cover: document.querySelector(".cover-btn"),
  all: document.querySelector(".all-btn"),
};

DOMSelectors.angel.addEventListener("click", function () {
  document.body.classList.add("cool");
  document.body.classList.remove("warm");
});

DOMSelectors.vampire.addEventListener("click", function () {
  document.body.classList.add("warm");
  document.body.classList.remove("cool");
});

DOMSelectors.orignal.addEventListener("click", function () {
  original();
});

DOMSelectors.cover.addEventListener("click", function () {
  cover();
});

DOMSelectors.all.addEventListener("click", function () {
  all();
});

songlist.forEach(() => {
  all();
});

/* FUCNTION LIBRARY */
function original() {
  DOMSelectors.display.innerHTML = "";
  songlist
    .filter((song) => song.type == "original")

    .forEach((song) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",

        `<div data-aos="fade-down" class="display-card">
            <img class="display-img" src="${song.image}" />
            <h3 class="display-title">${song.title}</h3>
            <h4 class="display-release">${song.release}</h4>
            <a href=${song.link} target ="blank"><button class="link-btn">Click to Listen</button>
          </div>`
      );
    });
}

function cover() {
  DOMSelectors.display.innerHTML = "";
  songlist
    .filter((song) => song.type == "cover")
    .forEach((song) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",

        `<div data-aos="fade-down" class="display-card">
            <img class="display-img" src="${song.image}" />
            <h3 class="display-title">${song.title}</h3>
            <h4 class="display-release">${song.release}</h4>
            <a href=${song.link} target ="blank"><button class="link-btn">Click to Listen</button>
          </div>`
      );
    });
}

function all() {
  DOMSelectors.display.innerHTML = "";
  songlist.forEach((song) => {
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-down" class="display-card">
            <img class="display-img" src="${song.image}" />
            <h3 class="display-title">${song.title}</h3>
            <h4 class="display-release">${song.release}</h4>
            <a href=${song.link} target ="blank"><button class="link-btn">Click to Listen</button>
          </div>`
    );
  });
}
