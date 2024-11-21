export const changeClass = (id, oldClass, newClass) => {
    const element = document.getElementById(id);
    if (element) {
        element.classList.replace(oldClass, newClass);
    }
}