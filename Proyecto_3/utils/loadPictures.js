export const loadPictures = () =>{
    // Acción que quieres ejecutar cuando el usuario llegue al final de la página
  const loadMorePictures = () => {
    console.log("Cargar más imágenes...");
    // Aquí puedes agregar la lógica para cargar más imágenes
  };

  window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      loadMorePictures();
    }
  });
};