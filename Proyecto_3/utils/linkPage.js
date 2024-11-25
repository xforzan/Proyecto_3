import { scrollToTop } from "./scrollToTop.js";

export const linkPage = (id, page) => {
    const link = document.querySelector(id);
    link.addEventListener("click", () => {
        page();
        scrollToTop();
    });
};