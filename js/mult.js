//concat rulezzz!
function swapLng(l) {
  var radioName = document.getElementsByName(l.name);
  for (i = 0; i < radioName.length; i++) {
    document.getElementById(radioName[i].id.concat("Setting")).style.display = "none";
    }
    document.getElementById(l.id.concat("Setting")).style.display = "block";
}

function readLng(){
  var curLng = localStorage.getItem("lang");//read saved value from ls
  var radioBtnSelector = document.querySelector('input[type="radio"][id=' + curLng + "]");//getElementsByName.checked dostn work((, so i use strange methods
  radioBtnSelector.click();// magick ivent! love you!
  radioBtnSelector.setAttribute('checked', 'checked');
  console.log(curLng, radioBtnSelector.value);
};

function saveLng() {
 var getRadioButtons = document.getElementsByName("lang");
  for (var x = 0; x < getRadioButtons.length; x ++) {
    if (getRadioButtons[x].checked) {
      console.log("You checked " + getRadioButtons[x].id);
      localStorage.setItem("lang", getRadioButtons[x].id);
      break;
    }

  }
}
