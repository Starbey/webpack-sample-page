import loadHome from "./home.js";
import loadGallery from "./gallery.js";
import loadContact from "./contact.js";

function createPage(){
    const page=document.createElement("div");
    page.setAttribute("id","page");
    return page;
}

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

function addEvents(){
    const homeBtn=document.getElementById("home");
    const galleryBtn=document.getElementById("gallery");
    const contactBtn=document.getElementById("contact");

    homeBtn.onclick=loadHome;
    galleryBtn.onclick=loadGallery;
    contactBtn.onclick=loadContact;
}

const content=document.getElementById("content");
content.appendChild(createHeader());
content.appendChild(createPage());
addEvents();

loadHome();