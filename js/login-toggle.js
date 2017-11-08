var $signUpToggle = $("#login-toggle-signUp");
var $signInToggle = $("#login-toggle-signIn");
var $signUpPage = $("#signUp-page");
var $signInPage = $("#signIn-page");
var $bar = $("#login-toggle-bar");

$signUpToggle.click(function(event){
    $signUpPage.show();
    $signInPage.hide();
    $signUpToggle.addClass('active');
    $signInToggle.removeClass('active');
    $bar.css('left', '-38px');
});

$signInToggle.click(function(event) {
    $signUpPage.hide();
    $signInPage.show();
    $signUpToggle.removeClass('active');
    $signInToggle.addClass('active');
    $bar.css('left', '38px');
});
