import loadHome from "./home.js";

function createBtn(id, text){
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
}

function createHeader(){
    const header=document.createElement("div");
    header.setAttribute("id","header");

    const nav=document.createElement("nav");
    nav.setAttribute("id","nav");

    const homeBtn = createBtn('home', 'home');
    const galleryBtn = createBtn('gallery', 'gallery');
    const contactBtn = createBtn('contact', 'contact');

    nav.appendChild(homeBtn);
    nav.appendChild(galleryBtn);
    nav.appendChild(contactBtn);
    header.appendChild(nav);
    return header;
}

const content=document.getElementById("content");
content.appendChild(createHeader());

loadHome();