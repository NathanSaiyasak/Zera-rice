
document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav-b');
    const menuToggle = document.getElementById('prevent');
    const menu = document.getElementById('menu');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.checked = false;
        });
    });

    document.addEventListener('click', function(e) {
        // Check if the click was outside the menu and if the menu is open
        if (!menu.contains(e.target) && !menuToggle.contains(e.target) && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });

    // Prevent the document click listener from triggering when clicking on the menu
    menu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

const appearOptions = {
    threshold: 0.1
};
const lineSlideRight = document.querySelectorAll(".line-slideRight")
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

/* 
function btnFunction() {
    var x = document.getElementById("circle-btn-1");
    if (x.classList.contains("visible")) {
        x.classList.remove("visible");
        setTimeout(() => { x.style.display = "none"; }, 500); // Hide after 500ms
    } else {
        x.style.display = "block"; // Show immediately
        x.classList.add("visible");
    }
}
*/

function toggleButton(buttonIdToShow, buttonIdToHide) {
    var buttonToShow = document.getElementById(buttonIdToShow);
    var buttonToHide = document.getElementById(buttonIdToHide);

    // Hide the button that needs to be hidden
    buttonToHide.classList.remove("visible");
    setTimeout(() => { buttonToHide.style.display = "none"; }, 0); // Use the same duration as CSS transition

    // Toggle visibility of the button to show
    if (!buttonToShow.classList.contains("visible")) {
        buttonToShow.style.display = "block";
        setTimeout(() => { buttonToShow.classList.add("visible"); }, 0.2);
    }
}

function btnFunction1() {
    toggleButton("circle-btn-1", "circle-btn-2");
}

function btnFunction2() {
    toggleButton("circle-btn-2", "circle-btn-1");
}

function btnFunction3() {
    toggleButton("circle-btn-3", "circle-btn-4");
}

function btnFunction4() {
    toggleButton("circle-btn-4", "circle-btn-3");
}

function btnFunction5() {
    toggleButton("circle-btn-5", "circle-btn-6");
}

function btnFunction6() {
    toggleButton("circle-btn-6", "circle-btn-5");
}

function btnFunction7() {
    toggleButton("circle-btn-7", "circle-btn-8");
}

function btnFunction8() {
    toggleButton("circle-btn-8", "circle-btn-7");
}