import { dataExplore } from "../data/dataExplore";
let pageNum = 1; // Inicializamos el número de página

export const getPageNum = () => pageNum;

export const loadPictures = () => {
  window.addEventListener('scroll', () => {
    if ((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight) {
      pageNum=pageNum+1;
      console.log(pageNum);
    }
  });
};
