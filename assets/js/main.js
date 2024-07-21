// skill tab
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)
        if (!target) return; // Check if the target exists

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active')
        })

        target.classList.add('skills__active')

        tabs.forEach(tab => {
            if (tab.classList) { // Check if classList exists
                tab.classList.remove('skills__active')
            }
        })

        if (tab.classList) { // Check if classList exists
            tab.classList.add('skills__active')
        }
    })
})
// mitxitup filter
let mixerPortfolio = mixitup('.project__container', {
    selectors: {
        target: '.project__card'
    },
    animation: {
        duration: 300
    }
});

// Link active

const linkProject = document.querySelectorAll('.project__item');

function activeProject() {
    linkProject.forEach((l) => l.classList.remove('active-project'));
    this.classList.add('active-project');
}

linkProject.forEach((l) => l.addEventListener('click', activeProject));

//popup

// project Popup
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("project__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".project__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".project__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

// infut animation
const inputs = document.querySelectorAll(".input")
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

/* SCROLL SECTIONS ACTIVE LINK */
// get all sections that have an id defined 
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll 
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        // Determine if current scroll position is within this section
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Add active class to corresponding navigation Link
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
        } else {
            // Remove active class from corresponding navigation Link
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    });
}

// -SHOW SIDEBAR 
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*===== SIDEBAR SHOW
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}
// ===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}



