import "../styles/style.css";
import { songlist } from "../js/songlist";
import AOS from "aos";
``;
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

console.log(songlist);

const DOMSelectors = {
  display: document.querySelector("#display"),
  themeBtn: document.querySelector(".btn"),
  orignal: document.querySelector(".ori-btn"),
  cover: document.querySelector(".cover-btn"),
};

DOMSelectors.themeBtn.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

DOMSelectors.orignal.addEventListener("click", function () {
  console.log("orignal");

  original();
});

DOMSelectors.cover.addEventListener("click", function () {
  console.log("cover");

  cover();
});

/* FUCNTION LIBRARY */
function original() {
  songlist
    .filter((song) => song.type == "orignal")
    .forEach((song) => {
      console.log(song.title, song.type);
    });
}

function cover() {
  songlist
    .filter((song) => song.type == "cover")
    .forEach((song) => {
      console.log(song.title, song.type);
    });
}
