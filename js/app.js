/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 * 
 */

const listContainer = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// back to top of the page on load
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

// build the nav

// add ID to all h2 tags
const sectionTitles = document.querySelectorAll("h2");

for (let sectionId = 0; sectionId < sectionTitles.length; sectionId++) {
    let att = document.createAttribute("id")
    att.value = sectionId + 1; // #1, #2, etc..
    sectionTitles[sectionId].setAttributeNode(att); // add the attribute to given section title ex: <h2 id="1">
}

// get coordinates of sections
let sectionCoordinates = [
    document.getElementById("1").getBoundingClientRect(),
    document.getElementById("2").getBoundingClientRect(),
    document.getElementById("3").getBoundingClientRect(),
    document.getElementById("4").getBoundingClientRect(),
]

for (let sectionNum = 1; sectionNum <= 4; sectionNum++) {

    const listItem = document.createElement("li");

    listItem.innerHTML = `Section ${sectionNum}`;

    // Scroll to anchor ID using scrollTO event
    listItem.addEventListener('click', function() {
        let sectionCoordinateY = sectionCoordinates[sectionNum - 1].y
        window.scrollTo(0, sectionCoordinateY - 150)
    })

    listContainer.appendChild(listItem);
}

// Add class 'active' to section when near top of viewport


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active