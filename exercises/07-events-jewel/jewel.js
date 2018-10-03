/**
 * Using addEventListener, attach an event to each jewel <img> so that, when clicked, it will:
 * 1.) Update the count in the counter box
 * 2.) Remove the jewel from the page
 */

function removeJewel() {
    document.getElementByID("counter").innerHTML++;

    let j = document.getElementByID(e)
    j.style.display = "none";
 }

var el = document.getElementById("outside");
el.addEventListener("click", removeJewel());