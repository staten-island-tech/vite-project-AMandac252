import "../styles/style.css";
import { angel } from "../js/2434/angel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  button: document.querySelector(".btn"),
  display: document.querySelector("#display"),
};

/* DOMSelectors.button.addEventListener("click", function (e) {
  e.preventDefault();
  const title = DOMSelectors.title.value;
  const img = DOMSelectors.image.value;
  const artist = DOMSelectors.artist.value;

  function addcard() {
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",

      `<div class="display-card">
                  <p class="display-album">${title}</p>
                 <p><img class="display-img" src="${img}"></p>
                  <p class ="display-artist">${artist}</p>
                  <button class="remove btn">Remove Album</button>
                </div>`
    );

    clearinput();
  }
  addcard();
  document.querySelectorAll(".remove").forEach((element) =>
    element.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    })
  );
});
console.log(DOMSelectors);

function clearinput() {
  DOMSelectors.title.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.image.value = "";
}
 */
