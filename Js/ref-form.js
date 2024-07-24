<<<<<<< HEAD
/*document.addEventListener("DOMContentLoaded", function () {
    const formSections = document.querySelectorAll(".form-section");
    const previousBtn = document.querySelector(".previous");
    const nextBtn = document.querySelector(".next");
    const submitBtn = document.querySelector(".submit");
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");

    let currentSectionIndex = 0;

    function showSection(index) {
        formSections.forEach((section, i) => {
            if (i === index) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });

        if (index === 0) {
            previousBtn.style.display = "none";
        } else {
            previousBtn.style.display = "inline-block";
        }

        if (index === formSections.length - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-block";
        } else {
            nextBtn.style.display = "inline-block";
            submitBtn.style.display = "none";
        }
    }

    function nextSection() {
        const currentSection = formSections[currentSectionIndex];
        const inputs = currentSection.querySelectorAll("input[required]");
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });

        if (isValid) {
            currentSectionIndex++;
            showSection(currentSectionIndex);
        } else {
            modal.style.display = "block";
            modal.classList.add("shaking"); // Add class to trigger animation

            // Remove shaking animation after 500 milliseconds
            setTimeout(() => {
                modal.classList.remove("shaking");
            }, 500);
        }
    }

    function previousSection() {
        currentSectionIndex--;
        showSection(currentSectionIndex);
    }

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    nextBtn.addEventListener("click", nextSection);
    previousBtn.addEventListener("click", previousSection);

    showSection(currentSectionIndex);
});
*/

/*************************Modal succes submission******************
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const successModal = document.getElementById("successModal");
    const closeSuccessBtn = document.querySelector("#successModal .close-success");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Your form submission logic here
        
        // Show success modal
        successModal.style.display = "block";
    });

    // Close success modal when close button is clicked
    closeSuccessBtn.addEventListener("click", function () {
        successModal.style.display = "none";
        
        // Reload the page after the modal is closed
        location.reload();
    });
});
*/

/************************************************************Newly combined code *********************************************** */
/*document.addEventListener("DOMContentLoaded", function () {
    const formSections = document.querySelectorAll(".form-section");
    const previousBtn = document.querySelector(".previous");
    const nextBtn = document.querySelector(".next");
    const submitBtn = document.querySelector(".submit");
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");
    const successModal = document.getElementById("successModal");
    const closeSuccessBtn = document.querySelector("#successModal .close-success");

    let currentSectionIndex = 0;

    function showSection(index) {
        formSections.forEach((section, i) => {
            if (i === index) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });

        if (index === 0) {
            previousBtn.style.display = "none";
        } else {
            previousBtn.style.display = "inline-block";
        }

        if (index === formSections.length - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-block";
        } else {
            nextBtn.style.display = "inline-block";
            submitBtn.style.display = "none";
        }
    }

    function nextSection() {
        const currentSection = formSections[currentSectionIndex];
        const inputs = currentSection.querySelectorAll("input[required]");
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });

        if (isValid) {
            currentSectionIndex++;
            showSection(currentSectionIndex);
        } else {
            modal.style.display = "block";
            modal.classList.add("shaking"); // Add class to trigger animation

            // Remove shaking animation after 500 milliseconds
            setTimeout(() => {
                modal.classList.remove("shaking");
            }, 500);
        }
    }

    function previousSection() {
        currentSectionIndex--;
        showSection(currentSectionIndex);
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwvLfThV76_KkDcVGxRBIVcBW5GwV70dBaLsmpDwdzYkcsJHp11KmcDLLI4EPNehsHzaw/exec';
        const form = document.forms['MotlalerainLearnersWebRegistrationData'];

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    successModal.style.display = "block"; // Show success modal
                    form.reset(); // Reset form fields

                    // Navigate to the first section of the form
                    currentSectionIndex = 0;
                    showSection(currentSectionIndex);
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                // Handle error - display error message to user or perform other actions
            });
    }

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    nextBtn.addEventListener("click", nextSection);
    previousBtn.addEventListener("click", previousSection);
    submitBtn.addEventListener("click", handleSubmit);

    showSection(currentSectionIndex);
    
    // Close success modal when close button is clicked
    closeSuccessBtn.addEventListener("click", function () {
        successModal.style.display = "none";
    });
});*/


/*******************************New Test code  *********************************************/
=======

>>>>>>> master
document.addEventListener("DOMContentLoaded", function () {
    const formSections = document.querySelectorAll(".form-section");
    const previousBtn = document.querySelector(".previous");
    const nextBtn = document.querySelector(".next");
    const submitBtn = document.querySelector(".submit");
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");
    const successModal = document.getElementById("successModal");
    const closeSuccessBtn = document.querySelector("#successModal .close-success");
    const message = document.getElementById("message");

    let currentSectionIndex = 0;

    function showSection(index) {
        formSections.forEach((section, i) => {
            if (i === index) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });

        if (index === 0) {
            previousBtn.style.display = "none";
        } else {
            previousBtn.style.display = "inline-block";
        }

        if (index === formSections.length - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-block";
        } else {
            nextBtn.style.display = "inline-block";
            submitBtn.style.display = "none";
        }
    }

    function nextSection() {
        const currentSection = formSections[currentSectionIndex];
        const inputs = currentSection.querySelectorAll("input[required]");
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });

        if (isValid) {
            currentSectionIndex++;
            showSection(currentSectionIndex);
        } else {
            modal.style.display = "block";
            modal.classList.add("shaking"); // Add class to trigger animation

            // Remove shaking animation after 500 milliseconds
            setTimeout(() => {
                modal.classList.remove("shaking");
            }, 500);
        }
    }

    function previousSection() {
        currentSectionIndex--;
        showSection(currentSectionIndex);
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission

        // Disable previous and submit buttons
        previousBtn.disabled = true;
        nextBtn.disabled = true;
        submitBtn.disabled = true;

        // Show submission progress loading message
        message.style.display = 'block';
        message.textContent = 'Submission in progress...';

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwvLfThV76_KkDcVGxRBIVcBW5GwV70dBaLsmpDwdzYkcsJHp11KmcDLLI4EPNehsHzaw/exec';
        const form = document.forms['MotlalerainLearnersWebRegistrationData'];

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    // Show success modal
                    successModal.style.display = "block";
                    // Reset form fields
                    form.reset();
                    // Navigate to the first section of the form
                    currentSectionIndex = 0;
                    showSection(currentSectionIndex);
                    // Hide submission progress message
                    message.style.display = 'none';
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                // Handle error - display error message to user or perform other actions
                // Enable previous and submit buttons
                previousBtn.disabled = false;
                nextBtn.disabled = false;
                submitBtn.disabled = false;
                // Hide submission progress message
                message.style.display = 'none';
            });
    }

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    nextBtn.addEventListener("click", nextSection);
    previousBtn.addEventListener("click", previousSection);
    submitBtn.addEventListener("click", handleSubmit);

    showSection(currentSectionIndex);
    
    // Close success modal when close button is clicked
    closeSuccessBtn.addEventListener("click", function () {
        successModal.style.display = "none";
    });
});


  