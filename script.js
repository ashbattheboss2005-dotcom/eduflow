

// Dropdown Toggle
const dropDowns = Array.from(
    document.querySelectorAll('#cs-navigation .cs-dropdown')
);

for (const item of dropDowns) {

    item.addEventListener('click', () => {

        item.classList.toggle('cs-active');

    });

}

// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(e) {

        const email = form.querySelector("input[type='email']");

        if (!email.value.includes("@")) {

            email.style.border = "2px solid red";

            e.preventDefault();

        }

    });

}