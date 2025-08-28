// Event: Form Submission with Custom Validation
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const destination = document.getElementById("destination").value;
  const message = document.getElementById("formMessage");

  // Clear any previous message
  message.textContent = "";

  // Custom Validation
  if (name === "" || email === "" || destination === "") {
    message.textContent = "All fields are required.";
    return;
  }

  // Basic email pattern check
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email address.";
    return;
  }

  // If valid
  message.style.color = "green";
  message.textContent = "Booking submitted successfully!";
  this.reset();
});

// Interactive Feature #1: Toggle Destination Section
document.getElementById("toggleDestinations").addEventListener("click", function () {
  const section = document.getElementById("destinations");
  section.style.display = section.style.display === "none" ? "block" : "none";
});

// Interactive Feature #2: Highlight Clicked Destination
function highlightDestination(element) {
  // Remove highlight from others
  const all = document.querySelectorAll(".destination");
  all.forEach(dest => dest.classList.remove("highlight"));

  // Highlight clicked one
  element.classList.add("highlight");
}
