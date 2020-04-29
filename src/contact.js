const contactPage = function(){

    let b = document.getElementById('centerdiv');
    let cNode = b.cloneNode(false);
    b.parentNode.replaceChild(cNode,b);

    b = document.getElementById('centerdiv');
    let title = document.createElement("p");
    title.id = "title";
    title.innerHTML = "Contact Us";

    let para = document.createElement("p");
    para.innerHTML = "Email: random@random.com<br><br>Phone Number: 1(800) Ran-dom1<br><br>Hello Restaurant<br>1234 Random Street<br>Random City, Random State 12345<br>";

    b.appendChild(title);
    b.appendChild(para);

}


export { contactPage }