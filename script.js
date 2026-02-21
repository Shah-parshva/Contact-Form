const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");

  // reset
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  let valid = true;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

  // name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    name.classList.add("shake");
    valid = false;
  }

  // email
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    email.classList.add("shake");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Invalid email format";
    email.classList.add("shake");
    valid = false;
  }

  // message
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required";
    message.classList.add("shake");
    valid = false;
  }

  // remove shake after animation
  setTimeout(() => {
    name.classList.remove("shake");
    email.classList.remove("shake");
    message.classList.remove("shake");
  }, 300);

  // success
  if (valid) {
    successMsg.textContent = "🎉 Message sent successfully!";
    form.reset();
  }
});