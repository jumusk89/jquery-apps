//Problem: Hints are shown even when form is valid
//Solution: Show when you need them
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isPasswordValid() {
	return $password.val().length > 8;
}

function arePasswordsMatching() {
	return $password.val() === $confirmPassword.val();
}

function canSubmit() {
	return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
		//Find out if password is valid 
		if(isPasswordValid()) {
		//Hide hint if valid
		$password.next().hide();
		//Else show hint
	}	else {
		$password.next().show();
	}
}

function confirmPasswordEvent() {
	//find out if password and confirmation match
	if (arePasswordsMatching()) {
		//Hide hint if match
		$confirmPassword.next().hide();
	} else {
		//Else show hint
		$confirmPassword.next().show();
	}
}

function enableSubmitEvent() {
	
	$("submit").prop("disabled", !canSubmit());
}
//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
		//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
		
