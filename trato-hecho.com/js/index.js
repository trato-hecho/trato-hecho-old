// header mobile menu
var mobile_menu = document.getElementById("header__list-id")
var mobile_menu_icon = document.getElementById("header__mobile-menu--icon-id")

function showMobileMenu(){
    if (mobile_menu.style.display === "block"){
        mobile_menu.style.display = "none"
        mobile_menu_icon.style.transform = "scale(1)"
    }
    else{
        mobile_menu.style.display = "block"
        mobile_menu_icon.style.transform = "scale(1.1)"
    }
}
