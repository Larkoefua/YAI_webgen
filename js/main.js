

(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 30, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            // Collapse the navbar (only if it's open)
            if (navbarCollapse.classList.contains("show")) {
                let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }

            // Smooth scroll to section if it exists
            if (targetSection) {
                event.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust based on navbar height
                    behavior: "smooth"
                });
            }
            // Remove 'active' class from all links and add to clicked one
            navLinks.forEach((nav) => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });
});

function validateForm() {
    console.log("Validation function is running...");

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Name Validation: Only letters and spaces, minimum 2 characters
    let nameRegex = /^[A-Za-z\s]{2,50}$/;
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name (letters and spaces only).");
        return false;
    }

    // ** Improved Email Validation Regex**
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        console.log("Invalid email:", email); // Debugging log
        return false;
    } else {
        console.log("Valid email entered:", email); // Debugging log
    }

    // Message Validation: At least 10 characters, no gibberish
    if (message.length < 10 || !/[a-zA-Z]/.test(message)) {
        alert("Message should be meaningful and at least 10 characters long.");
        return false;
    }

    console.log("Validation passed!");
    return true;
}




