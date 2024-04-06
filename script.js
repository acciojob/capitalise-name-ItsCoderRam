//your JS code here. If required.
let input = document.getElementById("fname");

input.addEventListener('blur',function Capitalized(e) {
	   let copy = e.target
	     copy.value = copy.value.toUpperCase();
	
})
