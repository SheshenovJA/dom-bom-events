//global area
function swapLng(x) {
  var radioName = document.getElementsByName(x.name);
  for (i = 0; i < radioName.length; i++) {
    console.log(radioName.length)
    document.getElementById(radioName[i].id.concat("Setting")).style.display = "none";
  }
  document.getElementById(x.id.concat("Setting")).style.display = "block";
}
