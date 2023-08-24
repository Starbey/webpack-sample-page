function createGallery(){
    const gallery=document.createElement("div");
    gallery.classList.add("gallery");
    
    gallery.appendChild(createP("Here are some more cat photos:"));
    gallery.appendChild(createImg("cat2.jpeg","cat2-image"));
    gallery.appendChild(createImg("cat3.jpg","cat3-image"));
    return gallery;
}

function createImg(source, cls){
    const img=document.createElement("img");
    img.src=source;
    img.classList.add(cls);
    return img;
}

function createP(text){
    const p=document.createElement("p");
    p.textContent=text;
    return p;
}

function loadGallery(){
    const page=document.getElementById("page");
    page.textContent="";
    page.appendChild(createGallery());//appends gallery
    console.log("gallery loaded");
}

export default loadGallery;