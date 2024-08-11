// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Loop through each section to check its position relative to the viewport
    sections.forEach(sec => {
        let top = window.scrollY; // Current scroll position from the top
        let offset = sec.offsetTop - 150; // Position of the section from the top minus offset
        let height = sec.offsetHeight; // Height of the section
        let id = sec.getAttribute('id'); // Get the id attribute of the section

        // If the current scroll position is within the section's boundaries
        if(top >= offset && top < offset + height) {
            // Remove the 'active' class from all navigation links
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add the 'active' class to the navigation link corresponding to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });

    // Scroll event: When the page is scrolled, the function will be triggered
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    navbar.classList.remove('active');
}

// Initialize ScrollReveal with common settings
ScrollReveal({
    distance: '300px',
    duration: 2000,
    delay: 300
});

// Reveal elements from different directions
ScrollReveal().reveal('.home-container, .home-img, .about-img, .about-content, .services-container, .heading-services, .portfolio-container, .heading-portfolio', { origin: 'bottom' });

// scroll reveal
var typed = new Typed(".multiple-text", {
    strings: ["Frontend developer"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 700,
    loop: true
})



// Handle CV download on button click
document.getElementById('DownloadCV').addEventListener("click", function() {
    var cvUrl = "CV/DTN_CV.pdf";
    var downloadLink = document.createElement("a"); // Create a temporary anchor element
    downloadLink.href = cvUrl;
    downloadLink.target = "_blank";
    downloadLink.download = "DTN_CV.pdf";
    document.body.appendChild(downloadLink); // Append the anchor to the body
    downloadLink.click();
    document.body.removeChild(downloadLink); // Remove the anchor from the body
})


// Send notification when entering information in contact section
const scriptURL = 'https://script.google.com/macros/s/AKfycbzjs46JU-3i_X3PI6yX0brzac0kRWRtKLm7_ssOwPE56T37W73HB1gGWPTTe-TUBxEV/exec';

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})