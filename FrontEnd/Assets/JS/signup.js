const user = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const pnumb = document.querySelector("#number");
const form = document.querySelector("#form");
const passImg = document.querySelector (".pass");
const show = document.querySelector("#show");
const hide = document.querySelector("#hide");
const small = document.querySelector("small");
const input = document.querySelector("input");



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

user.addEventListener("input", (e) => {
    validateUser();   
  });

email.addEventListener("input", (e) => {
  validateEmail();   
});
  
pass.addEventListener("input", (e) => {
  validatePass();   
});

pnumb.addEventListener("input", (e) => {
  validateNumber();   
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
  
  function validateUser() {
    const userValue = user.value.trim();
    const userCheck = /^[A-Za-z]+$/;
    if (userValue === "") {
      setErrorFor(user, "Username cannot be blank"); 
    } else if ((userValue.length <= 8) || (userValue.match(userCheck))) {
      setErrorFor(user, "Username must be more than 8 characters");
    } else if ((userValue.length > 8) && (userValue.match(userCheck))) {
      setSuccessFor(user);
    } else {
      setErrorFor(user, "Invalid Username");
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
  
  function validateNumber() {
    const pnumbValue = pnumb.value.trim();
    const pnumbCheck =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (pnumbValue.match(pnumbCheck)) {
      setSuccessFor(pnumb);
    } else if (pnumbValue === ""){
      setErrorFor(pnumb, "Phone number cannot be blank"); 
    } else{
      setErrorFor(pnumb, "The number you entered is invalid please follow the format given");
    }
  }
  
  function checkInputs() {
    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    switch(input) {
      case (userValue == ""):
        setErrorFor(user, "Please fill in the empty spaces"); 
        break;
      case (emailValue === ""):
        setErrorFor(email, "Please fill in the empty spaces"); 
        break;
      case (passValue == ""):
        setErrorFor(pass, "Please fill in the empty spaces"); 
        break;
      default: 
        setSuccessFor(input);
    }
    
    // if((emailValue === "") || (passValue === "") || (userValue === "")) {
    //   setErrorFor(email, "Please fill in the empty spaces"); 
    //   setErrorFor(pass, "Please fill in the empty spaces"); 
    //   setErrorFor(user, "Please fill in the empty spaces"); 
    // } else {
    //   setSuccessFor(email);
    //   setSuccessFor(pass);
    //   setSuccessFor(user);
    // }
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
