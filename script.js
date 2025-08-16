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

