const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "user") {
        alert("You have successfully logged in.");
        location.href="Home.html"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

switch(num){
    case 1:
        alert("January");
        break;
    case 2:
        alert("February");
        break;
}