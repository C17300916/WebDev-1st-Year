

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myMenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu')) {

    var menu = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < menu.length; i++) {
      var openMenu = menu[i];
      if (openMenu.classList.contains('show')) {
        openMenu.classList.remove('show');
      }
    }
  }
}

//rotating images
var pict_array = ["Images/winterfell.jpg","Images/symbol.jpg","Images/kings_landing.jpg","Images/throne.jpg"];
var counter = 0;
function rotatePicts() {
	alert(pict_array[counter]);
	counter++;
}

function rotatePicts() {
	alert(pict_array[counter]);
	counter++;
	setTimeout(rotatePicts,5000);
}

function rotatePicts() {
	document.getElementById("rotator").src = "" + pict_array[counter];
	counter++;
	
	setTimeout(rotatePicts,5000);
	if(counter == pict_array.length) {counter = 0;}
}
/* validation stops menu from opening so used html 5 validation instead
function validate() {
	//check if the first name is not blank
	if(document.regForm.firstname.value == ""){
		document.getElementById("firstnameMessage").innerHTML = " (First Name Cant be Blank!!);
		return false;
	}
	return true;
}
function validate() {
	//check if the surname is not blank
	if(document.regForm.surname.value == ""){
		document.getElementById("surnameMessage").innerHTML = " (SurnameCant be Blank!!);
		return false;
	}
	return true;
}
*/
