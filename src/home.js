const homePage = function(){

    let b = document.getElementById('centerdiv');
    let cNode = b.cloneNode(false);
    b.parentNode.replaceChild(cNode,b);

    b = document.getElementById('centerdiv');
    let title = document.createElement("p");
    title.id = "title";
    title.innerHTML = "Hello Restaurant";

    let para = document.createElement("p");
    para.innerHTML = "Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    b.appendChild(title);
    b.appendChild(para);

}


export { homePage }