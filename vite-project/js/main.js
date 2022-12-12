import "../styles/style.css";
import { songlist } from "../js/songlist";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  display: document.querySelector("#display"),
};

function display() {
  e.preventDefault();
  DOMSelectors.display.insertAdjacentHTML(
    songlist,
    "beforeend",

    `<div class="display-card">
              <p class="display-album">${song}</p>
              <p class ="display-artist">${artist}</p>
              <button class="display-link">To Listen</button>
            </div>`
  );
}

/* document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
 */
