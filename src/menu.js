const menuPage = function(){

    let b = document.getElementById('centerdiv');
    let cNode = b.cloneNode(false);
    b.parentNode.replaceChild(cNode,b);

    b = document.getElementById('centerdiv');
    let title = document.createElement("p");
    title.id = "title";
    title.innerHTML = "Menu";

    let para = document.createElement("p");
    para.innerHTML = "Hot Dog<br>$2.00<br><br>Hot Dog<br>$2.00<br><br>Hot Dog<br>$2.00<br><br>Hot Dog<br>$2.00<br><br>Hot Dog<br>$2.00<br><br>Hot Dog<br>$2.00<br><br>Hot Dog<br>$2.00";

    b.appendChild(title);
    b.appendChild(para);

}


export { menuPage }