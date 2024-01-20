(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetching the values from the form
    var name = document.querySelector('[name="name"]').value;
    var email = document.querySelector('[name="email"]').value;
    var subject = document.querySelector('[name="subject"]').value;
    var message = document.querySelector('[name="message"]').value;

    // Handling the data - for example, storing in local storage or sending to a server
    console.log('Name:', name, 'Email:', email, 'Subject:', subject, 'Message:', message);

    // Example: Storing in local storage
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactSubject', subject);
    localStorage.setItem('contactMessage', message);

    // Add additional code here for what you want to do after form submission
});

