/**
 * Using addEventListener, attach an event to each jewel <img> so that, when clicked, it will:
 * 1.) Update the count in the counter box
 * 2.) Remove the jewel from the page
 */

let el = document.getElementsByTagName('IMG');
let counter = 0;

for(let i = 0; i < el.length; i++){
    el[i].addEventListener("click", () => {
        el[i].style.display = "none";
        document.getElementById("counter").innerHTML = ++counter;
    });
}

