const forms = document.getElementById("my-form");

forms.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log("form submitted without reloading");

    // Show form data in console
    const formData = new FormData(e.target);
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }
});


//Real-Time Input Validation

//Check if the name is at least 3 characters.

//Validate email format.

//Ensure password length is strong.

forms.name.addEventListener("input", () => {
    if (forms.name.value.length < 3) {
        forms.name.style.border = "2px solid red";
    } else {
        forms.name.style.border = "2px solid green";
    }
});

