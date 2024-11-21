
export let query = "";

export const searchBarListener = () => {
    const searchBar = document.querySelector("#searchBar");
    if (searchBar) {
        searchBar.addEventListener("input", () => {
            query = searchBar.value;
        });
    }
};
