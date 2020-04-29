import { initPage } from './pagesetup'
import { homePage } from './home'
import { menuPage } from './menu'
import { contactPage } from './contact'


window.onload=function(){
    console.log("affirmative");
    initPage();
    homePage();

    let home = document.getElementById("homebutton");
    let menu = document.getElementById("menubutton");
    let contactus = document.getElementById("contactus");

    home.onclick = function(){
        homePage();
    }

    menu.onclick = function(){
        menuPage();
    }

    contactus.onclick = function(){
        contactPage();
    }
    
}