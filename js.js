const Menu = document.querySelector(".menu");
const ToggleIcon = document.querySelector(".toggle_menu i");
const dropDown = document.querySelector(".dropdown_menu");

Menu.onclick = function(){
    dropDown.classList.toggle('open')

    const isOpen = dropDown.classList.contains('open')

    ToggleIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}