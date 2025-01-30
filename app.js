const menuButton = document.querySelector(".fa-bars");
const navlist = document.getElementById("manulist");

navlist.style.height = "0";
function menuList() {
    console.log("dd");

    if (navlist.style.height == "0px") {
        navlist.style.height = "40vh";
    }
    else {
        navlist.style.height = "0";
    }
}

let angle_down1 = document.querySelector("#fa-angle-down1");
let angle_down2 = document.querySelector("#fa-angle-down2");
let dropdownfooter_1 = document.querySelector(".dropdown-footer-1")
let dropdownfooter_2 = document.querySelector(".dropdown-footer-2")
let h1 = document.querySelector(".h1")
dropdownfooter_1.style.opacity = "0";
angle_down1.addEventListener("click", function () {
    if (dropdownfooter_1.style.opacity == "0") {
        dropdownfooter_1.style.opacity = "1";
        dropdownfooter_1.style.height = "auto";
        angle_down1.style.transform = "rotate(0deg)";
        h1.style.paddingBottom = "0px";
    }
    else {
        dropdownfooter_1.style.opacity = "0";
        dropdownfooter_1.style.height = "0";
        angle_down1.style.transform = "rotate(180deg)";
    }
})

dropdownfooter_2.style.opacity = "0";
    angle_down2.addEventListener("click", function () {
        if (dropdownfooter_2.style.opacity == "0") {
            dropdownfooter_2.style.opacity = "1";
            dropdownfooter_2.style.height = "auto";
            angle_down2.style.transform = "rotate(0deg)";
        }
        else {
            dropdownfooter_2.style.opacity = "0";
            dropdownfooter_2.style.height = "0";
            angle_down2.style.transform = "rotate(180deg)";
        }
})
