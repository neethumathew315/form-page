const forms = document.getElementById("my-form");

forms.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("form submitted without reloading");
});

