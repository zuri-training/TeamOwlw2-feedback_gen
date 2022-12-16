const form = document.querySelector("form");
const email = document.querySelector("#email");
const small = document.querySelector("small");
const hide = document.querySelector("#hide");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();   
  });

email.addEventListener("input", (e) => {
    validateEmail();   
});

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

  function checkInputs() {
    const emailValue = email.value.trim();
    if (emailValue === "") {
      setErrorFor(email, "Please fill in the empty field"); 
    } else {
      setSuccessFor(email);
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
