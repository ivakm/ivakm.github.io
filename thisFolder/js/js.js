$(document).ready(function () {
    var link = $(".header_menu_mobile");
    var menu = $(".right_menu_mobile");
    var enough = $(".right_menu_mobile a")
    link.click(function () {
        $(this).toggleClass("header_menu_mobile_active");
     menu.toggleClass("right_menu_mobile_active")
    })
    enough.click(function () {
        link.toggleClass("header_menu_mobile_active");
        menu.toggleClass("right_menu_mobile_active");
    })
        $(".third ul li ul li").click(function () {
            $(this).nextAll().slideToggle();
        })

})