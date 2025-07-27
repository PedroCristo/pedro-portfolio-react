// Select all section elements on the page
const sections = document.querySelectorAll("section");
// Select all the list items in the navigation menu
const navLi = document.querySelectorAll(".navbar .menu li");
// When the user scrolls the page, run this function
window.onscroll = () => {
  // Initialize a variable to keep track of the current section
  var current = "";
  // For each section on the page, check if the user has scrolled to it
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    } 
  });
  // For each list item in the navigation menu, update its active state
  navLi.forEach((li) => {
    // Remove the "active" class from all list items
    li.classList.remove("active");
    // If the list item's class matches the current section, add the "active" class
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
