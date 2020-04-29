
const initPage = function(){

    let view = document.getElementById("content");

    //nav bar
    let topBar = document.createElement("div");
    topBar.id = "topdiv";
    view.appendChild(topBar);

    let homeButton = document.createElement("div");
    homeButton.classList.add("tab");
    homeButton.id = "homebutton";
    homeButton.innerHTML = "Home";
    let menuButton = document.createElement("div");
    menuButton.classList.add("tab");
    menuButton.id = "menubutton";
    menuButton.innerHTML = "Menu";
    let contactUs = document.createElement("div");
    contactUs.classList.add("tab");
    contactUs.id = "contactus";
    contactUs.innerHTML = "Contact Us";
    topBar.appendChild(homeButton);
    topBar.appendChild(menuButton);
    topBar.appendChild(contactUs);
    view.appendChild(topBar);

    //center viewport
    let centerContainer = document.createElement("div");
    centerContainer.id = "centerdiv";
    view.appendChild(centerContainer);

    //footer
    let footBar = document.createElement("div");
    footBar.innerHTML = "&#169 random info here";
    footBar.id = "footdiv";
    view.appendChild(footBar);
    
}


export { initPage }