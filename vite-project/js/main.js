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

  console.log("work");
});

DOMSelectors.orignal.addEventListener("click", function () {
  console.log("orignal");
});

DOMSelectors.cover.addEventListener("click", function () {
  console.log("cover");
});

/* DOMselectors.display.forEach(
  (element) =>
    function addcard(songlist) {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",

        `<div class="display-card">
      <p class="display-album">${title}</p>
      <p><img class="display-img" src="${img}"></p>
      <p class ="display-artist">${artist}</p>
      <button class="remove btn">Remove Album</button>
    </div>`
      );
    }
); */
