import { scrollToTop } from "./scrollToTop.js";

export const linkPage = (id, page, scroll) => {
    const link = document.querySelector(id);
    link.addEventListener("click", () => {
        page();
        if (scroll === true){
            scrollToTop();
        }
    });
};