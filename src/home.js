function createHome() {
    const home=document.createElement("div");
    home.classList.add("home");
    
    home.appendChild(createImg("./cat.jpg","cat-image"));
    home.appendChild(createP("Look at this cat."));
    home.appendChild(createP("Much better than a dog, yes?"));
    return home;
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
    
function loadHome(){
    const page=document.getElementById("page");
    page.textContent="";
    page.appendChild(createHome());//appends home
    console.log("home loaded");
}
    
export default loadHome;