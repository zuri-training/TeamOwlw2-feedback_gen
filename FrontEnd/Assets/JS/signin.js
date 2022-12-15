const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const form = document.querySelector("form");
const passImg = document.querySelector (".pass");
const show = document.querySelector("#show");
const hide = document.querySelector("#hide");
const small = document.querySelector("small");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();   
});

show.addEventListener("click", () => {
  toggle();
});

hide.addEventListener("click", () => {
  toggle();
});

email.addEventListener("input", (e) => {
  validateEmail();   
});

pass.addEventListener("input", (e) => {
  validatePass();   
});

function toggle() {
  if (pass.type === "password") {
    pass.type = "text";
    show.classList.remove("inactive");
    hide.classList.add("inactive");
  } else {
    pass.type = "password";
    show.classList.add("inactive");
    hide.classList.remove("inactive");
  }
}

function validateEmail() {
  const emailValue = email.value.trim();
  const emailCheck =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+]+\.[a-zA-Z]{1,63}$/;
  if (emailValue.match(emailCheck)) {
    setSuccessFor(email);
  } else if (emailValue === ""){
    setErrorFor(email, "Email cannot be blank"); 
  } else{
    setErrorFor(email, "Invalid email address");
  }
}

function validatePass() {
  const passValue = pass.value.trim();
  const passCheck =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (passValue.match(passCheck)) {
    setSuccessFor(pass);
  } else if (passValue === ""){
    setErrorFor(pass, "Password cannot be blank"); 
  } else{
    setErrorFor(pass, "Your password must be at least 6 charaters as well as contain at least one uppercase, one lowercase, and one number");
  }
}

function checkInputs() {
  const emailValue = email.value.trim();
  const passValue = pass.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "Please fill in the empty field"); 
  } else if (passValue === "") {
    setErrorFor(pass, "Please fill in the empty field"); 
  } else {
    setSuccessFor(email);
    setSuccessFor(pass);
  }
}

function setErrorFor(input, message) {
  const signin = input.parentElement;
  small.innerText = message;
  small.style.display = "block"
  signin.className = "signin error"
}

function setSuccessFor(input) {
  const signin = input.parentElement;
  small.style.display = "none"
  signin.className = "signin success";
}