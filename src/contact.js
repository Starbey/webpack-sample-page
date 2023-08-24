function createContact() {
    const contact=document.createElement("div");
    contact.classList.add("contact");
    
    contact.appendChild(createImg("./contact image.jpg","contact-image"));
    contact.appendChild(createP("The cat does not wish to be contacted."));
    contact.appendChild(createP("That being said, leave some catnip outside 123 Whiskers Ave., Toronto, ON."));
    return contact;
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
    
function loadContact(){
    const page=document.getElementById("page");
    page.textContent="";
    page.appendChild(createContact());//appends contact
    console.log("contact loaded");
}
    
export default loadContact;