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
const sectionContainers = document.getElementsByTagName("section");
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
let sectionCoordinates = [];
for (let sectionTitleId = 1; sectionTitleId <= sectionContainers.length; sectionTitleId++) {
    sectionCoordinates.push(
        document.getElementById(sectionTitleId).getBoundingClientRect() //push section to the array
    );
}

// Build menu 
for (let sectionNum = 1; sectionNum <= sectionContainers.length; sectionNum++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Section ${sectionNum}`;

    // Scroll to section on link click
    listItem.addEventListener('click', function() {
        let sectionCoordinateY = sectionCoordinates[sectionNum - 1].y;
        // Scroll to anchor ID using scrollTO event
        window.scrollTo(0, sectionCoordinateY - 150)
    })

    listContainer.appendChild(listItem);
}

// Add class 'active' to section when near top of viewport
for (let sectionNum = 1; sectionNum < sectionContainers.length; sectionNum++) {
    let classAttr = document.createAttribute("class")
    sectionContainers[sectionNum].setAttributeNode(classAttr);
}

// add active state by scroll event (Y axis coordinates)
document.addEventListener('scroll', function() {
    let scrollPositionY = window.scrollY; // get Y axis coordinates
    for (let sectionIndex = 0; sectionIndex < sectionContainers.length; sectionIndex++) {
        if (sectionIndex === sectionContainers.length - 1) {
            if (sectionCoordinates[sectionIndex].y && (scrollPositionY > (sectionCoordinates[sectionIndex].y - 150))) {
                toggleActive(sectionIndex);
            }
        } else if ((scrollPositionY >= (sectionCoordinates[sectionIndex].y - 150)) && (scrollPositionY < (sectionCoordinates[sectionIndex + 1].y - 150))) {
            toggleActive(sectionIndex);
        }
    }
});

// Set sections as active
function toggleActive(addIndex) {
    for (let sectionId = 0; sectionId < sectionContainers.length; sectionId++) {
        if (addIndex === sectionId) {
            sectionContainers[sectionId].classList.add("active") // add active state when selected section is in viewport
            continue;
        } else {
            sectionContainers[sectionId].classList.remove("active") // remove active state when selected section is in viewport
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
 */