'use strict';

const firstNameInp = document.getElementById('firstNameInp');
const lastNameInp = document.getElementById('lastNameInp');
const submitButton = document.getElementById('submitButton');
const sidebar = document.getElementById('sidebar');
const commentForm = document.getElementById('commentForm');


submitButton.addEventListener('click', ($event) => {
    $event.preventDefault(); // Prevent submitting and refreshing page.

    // Populate the display section (sidebar):
    // Create the new necessary elements:
    let newHeading = document.createElement('h2');// Holds First and last name as a heading
    let newParagraph = document.createElement('p');

    // Add content to the new elements:
    newHeading.textContent = firstNameInp.value + " " + lastNameInp.value + ",";

    newParagraph.textContent = "Thank you for joining the revolution!";

    // Stitch the new elements to the sidebar:
    sidebar.appendChild(newHeading);
    sidebar.appendChild(newParagraph);

    // Some extra styling:
    sidebar.classList.add('p-4', 'border');

    commentForm.reset();
});