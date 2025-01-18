//---------------------------------------------
// Smooth Scroll Function for the Down Arrow  |
//---------------------------------------------

/*
* Smoothly scrolls the page to the section identified by 'sectionId' 
*/
function scrollToSection(sectionId){
    // Get the DOM element with the specified ID
    var element = document.getElementById(sectionId);

    // Use the built-in scrollIntoView method with a smooth scroll behavior
    element.scrollIntoView( {behavior: "smooth"});

}