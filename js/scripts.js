window.addEventListener("load", function() {
const h1Element = document.querySelector("h1");
h1Element.remove();
//removed original title
let body = document.body;

const newH1 = document.createElement("h1");
newH1.append("Webpage Recreation Practice");
body.after(newH1);
//recreate h1

const firstP = document.createElement("p");
firstP.append("The HTML of this webpage was created with JavaScript.");
newH1.after(firstP);
//recreate paragraph

const firstImg = document.createElement("img");
firstImg.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
firstImg.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
firstImg.setAttribute("style","width:50%");
firstP.after(firstImg);
//recreate img

const secondH1 = document.createElement("h1");
secondH1.append("Facts about the Multicolored Tanager");
firstImg.after(secondH1);
//recreate h1 part 2

const firstUl= document.createElement("ul");
const firstLi =document.createElement("li");
firstLi.append ("It is endemic to the mountains of Colombia.");
const secondLi = document.createElement("li");
secondLi.append ("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
firstUl.prepend (firstLi);
firstUl.append (secondLi);
secondH1.after(firstUl);
//create ul
const newH2 = document.createElement("h2");
newH2.append("Source");
firstUl.after(newH2);


const firstA = document.createElement("a");
firstA.setAttribute("href","https://en.wikipedia.org/wiki/Multicoloured_tanager");
firstA.append("Wikipedia")
newH2.after(firstA);


});







