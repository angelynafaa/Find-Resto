import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");
 
hamburgerButtonElement.addEventListener("click", event => {
 drawerElement.classList.toggle("open");
 event.stopPropagation();
});

mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
   });

