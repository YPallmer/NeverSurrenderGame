const logoImg = document.querySelector("img");
logoImg.addEventListener("mouseover",colorLogo);
logoImg.addEventListener("mouseout",silueteLogo);

function colorLogo(){
    logoImg.getAttribute("src");
    logoImg.setAttribute("src","images/reveal.png");
}

function silueteLogo(){
    logoImg.getAttribute("src");
    logoImg.setAttribute("src","images/siluet.png");
}