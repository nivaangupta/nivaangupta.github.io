/* ====================================== TYPING ANIMATION =================================================== */
var typed = new Typed(".typing", {
  strings: ["", "Full-stack Development", "Web Development", "Software Development", "Cloud Development", "Data Engineering", "Technical Consulting"],
  typeSpeed: 120,
  backSpeed: 90,
  loop: true
});

/* ====================================== NAVBAR STUFF =================================================== */
const nav = document.querySelector(".nav"), 
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(let i=0; i<totalNavList; i++) {
      const a = navList[i].querySelector("a");
      a.addEventListener("click", function(){
          for(let j=0; j<totalNavList; j++){
              navList[j].querySelector("a").classList.remove("active")
          }
          this.classList.add("active")
          if(window.innerWidth < 1200)
          {
              asideSectionTogglerBtn();   
          }
      })
    }

const work = document.querySelector(".portfolio-filter"),
    workList = work.querySelectorAll("li"),
    totalWorkList = workList.length;
    for(let i=0; i<totalWorkList; i++) {
      workList[i].addEventListener("click", function(){
          for(let j=0; j<totalWorkList; j++){
              workList[j].classList.remove("current")
          }
          this.classList.add("current")
      })
    }

const container = document.querySelector(".main-content")
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {
      asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn() {
      console.log(aside.classList)
      aside.classList.toggle("open");
      navTogglerBtn.classList.toggle("open");
      console.log(container)
      container.classList.toggle("open");
    }

// Get all the sections
var sections = document.querySelectorAll("section");

// Get all the navbar links
var navLinks = document.querySelectorAll(".nav a");

// Function to check if a section is in the viewport
function isSectionInView(element) {
var rect = element.getBoundingClientRect();
return (
  rect.top >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
);
}

// Function to update the active section in the navbar
function updateActiveSection() {
// Remove the "active" class from all navbar links
navLinks.forEach(function (link) {
  link.classList.remove("active");
});

// Loop through the sections and find the active one
sections.forEach(function (section) {
  if (isSectionInView(section)) {
    // Get the corresponding navbar link based on the section's id
    var navLink = document.querySelector('a[href="#' + section.id + '"]');
    if (navLink) {
      // Add the "active" class to the corresponding navbar link
      navLink.classList.add("active");
    }
  }
});
}

function updateActiveSection() {
  const fromTop = window.scrollY;

  sections.forEach((section) => {
    const navLink = document.querySelector('a[href="#' + section.id + '"]');
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (fromTop >= sectionTop - 50 && fromTop < sectionTop + sectionHeight - 50) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}

// Listen for scroll events and update the active section accordingly
window.addEventListener("scroll", updateActiveSection);

// Initial update of the active section
updateActiveSection();


// POP UP STUFF

// function togglePopup(popupid){
//     document.getElementById(popupid).classList.toggle("active");
// }

function togglePopup(popupId) {
  const popup = document.getElementById(popupId);

  if (popup) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach((p) => {
      if (p.id === popupId) {
        // Set a desired z-index for the targeted pop-up
        p.style.zIndex = '999';
      } else {
        // Set a negative z-index for other pop-ups
        p.style.zIndex = '-1';
      }
      p.classList.toggle('active');
    });
  }
}


var startDate = new Date('2023-05-14');
var endDate = new Date();

// Calculate the time difference in milliseconds
var timeDiff = endDate.getTime() - startDate.getTime();

// Calculate the number of days
var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// Update the counter element on the page
document.getElementById('counter').textContent = daysDiff;


// --------------

// Get the list items
var filterItems = document.querySelectorAll('.portfolio-filter li');

// Get the portfolio items
var portfolioItems = document.querySelectorAll('.grid-item');

// Add click event listener to each list item
filterItems.forEach(function(item) {
item.addEventListener('click', function() {
  // Get the filter value
  var filterValue = item.getAttribute('data-filter');

  // Show or hide the portfolio items based on the filter value
  portfolioItems.forEach(function(portfolioItem) {
    var itemCategories = portfolioItem.getAttribute('data-category').split(' ');
    var showItem = false;

    itemCategories.forEach(function(category) {
      if (filterValue === '*' || category === filterValue) {
        showItem = true;
      }
    });

    if (showItem) {
      portfolioItem.style.display = 'block';
    } else {
      portfolioItem.style.display = 'none';
    }
  });

  // Add or remove the 'current' class from the clicked list item
  filterItems.forEach(function(filterItem) {
    filterItem.classList.remove('current');
  });
  item.classList.add('current');
});
});
