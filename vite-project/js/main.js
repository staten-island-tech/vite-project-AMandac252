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

DOMSelectors.display.insertAdjacentHTML(
  "beforeend",

  `<div data-aos="fade-down" class="display-card">
  <img class="display-img" src="images/icebreaker.png"/>
  <h5 class="display-album">IceBreaker</h5>
   <button class="link-button">Listen now</button>
  </div>`
);
