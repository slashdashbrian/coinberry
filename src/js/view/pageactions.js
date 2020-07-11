import {DOM} from '../controller/base'

// HAMBURGER MENU
export const open = () => {
    DOM.navbar.classList.remove("visibility");

};
 export const close = () => {
    DOM.navbar.classList.add("visibility");
};


// EXCHANGE ICON ANIMATION
export const icon = (e) => {
e.preventDefault;
DOM.el.classList.remove("ani");
void DOM.el.offsetWidth; // trigger a DOM reflow
DOM.el.classList.add("ani");
}

