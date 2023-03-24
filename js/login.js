function check(form) {
  /*the following code checkes whether the entered userid and password are matching*/
  if(form.user.value == "axiong" && form.pass.value == "1234") {
    window.open('members.html')/*opens the target page while Id & password matches*/
  }
  else {
    alert("Error Password or Username")/*displays error message*/
  }
}
