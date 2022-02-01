const nav_icon = document.getElementById("nav_icon");
const search_icon = document.getElementById("search_icon");
const mobile_menu = document.getElementById("mobile-menu");
const search_bar = document.getElementById("search-bar");
const search_btn = document.getElementById("search_icon_btn");
// const desktop_menu = document.getElementById("desktop_menu");
const desktop_nav_links = document.getElementsByClassName("desktop-nav-links")

nav_icon.addEventListener("click", () => {
    mobile_menu.classList.toggle("hidden");
})

search_icon.addEventListener("click", () => {
    for (let i = 0; i < desktop_nav_links.length; i++) {
        desktop_nav_links[i].classList.toggle("hidden");
    }

    search_bar.classList.toggle("hidden");
    search_btn.classList.toggle("bg-white/30");
})