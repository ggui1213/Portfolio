AOS.init();

let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let portfolioCollection = [
{
    "itemTitle" : "Laundry Exposure",
    "category" : "photography",
    "id" : "laundry",
    "description" : "Double exposure of myself and the laundry, reflecting on my live as a female and future.",
    "image" : "img/works/laundry.png"
},{
    "itemTitle" : "Crack",
    "category" : "photography",
    "id" : "crack",
    "description" : "creative photography, leaving audience the imagination for the image",
    "image" : "img/works/crack.png"
},{
    "itemTitle" : "Self",
    "category" : "photography",
    "id" : "myself",
    "description" : "creative photography, using indoor light to create a double exposure feeling",
    "image" : "img/works/myself.png"
},{
    "itemTitle" : "Good",
    "category" : "photography",
    "id" : "good",
    "description" : "photoshop edited photo, implying censorship, techniques inspired by Gretchen Bender’s Dumping Core, content inspired by Urumqi Protest and A4 Revolutions ",
    "image" : "img/works/good.png"
},{
    "itemTitle" : "Identity",
    "category" : "photography",
    "id" : "identity",
    "description" : "photoshop edited photo,",
    "image" : "img/works/identity.png"
},{
    "itemTitle" : "Passengers",
    "category" : "photography",
    "id" : "pass",
    "description" : "photoshop edited creative photography, indicating the society where privacy is constantly collapsing",
    "image" : "img/works/people.png"
},{
    "itemTitle" : "Web Spectacles",
    "category" : "photography",
    "id" : "spectacles",
    "description" : "photoshop edited creative photography, inspired by Society of Spectacles by Guy Debord and Andy Warhol’s works, to indicate our mass media’s potential influences to mind",
    "image" : "img/works/spectacle.png"
},{
    "itemTitle" : "Interactive Desktop",
    "category" : "interactive",
    "id" : "desktop",
    "description" : "an interactive work created in p5.js, presenting a desktop of a person and their little feelings in a stream of consciousness storytelling way, https://editor.p5js.org/yg2841/full/XgWdwkgGn",
    "image" : "img/works/smile.png"
},{
    "itemTitle" : "Zodiac Placemat",
    "category" : "visual",
    "id" : "mat",
    "description" : "Zodiac Placemat of 12 star zodiac signs, created in Adobe InDesign",
    "image" : "img/works/zodiac.png"
},{
    "itemTitle" : "Interactive Kiosk",
    "category" : "interactive",
    "id" : "kiosk",
    "description" : "Interactive Kiosk of the 12 star zodiac signs, created in ProtoPie. https://drive.google.com/file/d/1LKWtzF2jJnAmTRBpoA_Cxbuq_6Ngb5DA/view?usp=sharing",
    "image" : "img/works/kiosk.png"
},{
    "itemTitle" : "Dream Receiver",
    "category" : "visual",
    "id" : "receiver",
    "description" : "A website contains threshold image of myself reflecting inside a dream, and fragments, https://ggui1213.github.io/JSON/",
    "image" : "img/works/receiver.png"
},{
    "itemTitle" : "Bridge",
    "category" : "photography",
    "id" : "bridge",
    "description" : "Williamsburg Bridge and pigeons in protrait mode",
    "image" : "img/works/bridge.png" 
},{
    "itemTitle" : "Frame",
    "category" : "photography",
    "id" : "frame",
    "description" : "Buildings on the street above in the sky in landscape mode",
    "image" : "img/works/frame.png" 
},{
    "itemTitle" : "Silhouette",
    "category" : "photography",
    "id" : "silhouette",
    "description" : "Silhouette of the street light",
    "image" : "img/works/silhouette.png" 
},{
    "itemTitle" : "Untitled",
    "category" : "interactive",
    "id" : "untitled",
    "description" : "an interactive work that reflecting my whole experience on the Internet. https://ggui1213.github.io/Midterm_Mobile/index.html",
    "image" : "img/works/Untitled.png" 
}];


document.addEventListener("DOMContentLoaded", function(){

  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "item") { /* Display project previews in grid */

    /* Set page title if we are in a specific section */
    if (urlSection == "photography") {
      pageTitleElement.innerText = "Photography Works:";
    }else if (urlSection == "interactive") {
      pageTitleElement.innerText = "Interactive Works:";
    }else if (urlSection == "visual") {
      pageTitleElement.innerText = "Visual Works:";
    }

    /* Create thumbnails for matching category, or all */
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
        createProjectPreview(portfolioCollection[i]);
      }
    }

  }

  else {
    /* Display individual project by trying to match the "ID" value */
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["id"] == urlID) {
        createProjectPage(portfolioCollection[i]);
      }
    }
  }

});


function createProjectPreview(incomingJSON){

  let newPreviewLink = document.createElement("A");
  newPreviewLink.href = "works.html?section=item&id=" + incomingJSON["id"];
  newPreviewLink.setAttribute("data-aos", "fade-up")

  let newPreviewElement = document.createElement("DIV");
  newPreviewLink.appendChild(newPreviewElement);

  let newPreviewTitle = document.createElement("P");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = incomingJSON["itemTitle"];
  newPreviewElement.appendChild(newPreviewTitle);

  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON["image"];
  newPreviewElement.appendChild(newPreviewThumbnail);


  outputGridElement.appendChild(newPreviewLink);

}

function createProjectPage(incomingJSON) {
  
  pageTitleElement.innerText = incomingJSON["itemTitle"];

  let newProjectElement = document.createElement("DIV");
  newProjectElement.setAttribute("data-aos", "fade-up");

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElement.appendChild(newProjectElement);

}
