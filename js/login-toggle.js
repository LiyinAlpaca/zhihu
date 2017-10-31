var signUpToggle = document.getElementById("login-toggle-singUp");
var signInToggle = document.getElementById("login-toggle-singIn");
var signUpPage = document.getElementById("signUp-page");
var signInPage = document.getElementById("signIn-page");
var bar = document.getElementById("login-toggle-bar");

signUpToggle.onclick = function() {
    signUpPage.style.display = 'block';
    signInPage.style.display = 'none';
    signUpToggle.className = "active";
    signInToggle.className = "";
    bar.style.left = '-38px';
}

signInToggle.onclick = function() {
    signUpPage.style.display = 'none';
    signInPage.style.display = 'block';
    signUpToggle.className = "";
    signInToggle.className = "active";
    bar.style.left = '38px';
}