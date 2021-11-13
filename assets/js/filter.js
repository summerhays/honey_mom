---
---
var list_div = document.getElementsByClassName("list_div");
var list_button = document.getElementsByClassName("list_button");
var list_caret = document.getElementsByClassName("caret");

function filterFunction(input) {
  var input, filter, ul, li, a, i, alpha;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
	// Remove alpha headers
  alpha = document.getElementsByClassName("abc");
  filterbye = document.getElementsByClassName("filterbye");
  if (filter.length > 1) {
	    // make extra page stuff disappear
	    for (var j=0;j<alpha.length;j+=1){
               alpha[j].style.display = 'none';
               filterbye[j].style.display = 'none';
             }
  } else {
	    // make extra page stuff reappear
	    for (var j=0;j<alpha.length;j+=1){
               alpha[j].style.display = 'block';
               filterbye[j].style.display = 'block';
             }
  }
  for (i = 1; i < (list_button.length + 1); i++) {
    var y = document.getElementById("momism_id" + i); // The button
    var x = document.getElementById("momism" + i); // The div
    var caretid = document.getElementById("caret" + i);
    txtValue = y.textContent || list_button[i].innerText;
	  // If there's a match
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      y.style.display = "";
      if (filter.length > 2 && x.className.indexOf("w3-show") == -1) {
	     toggleAccordion(i); 
      }
    } else {
      if (x.className.indexOf("w3-show") > -1) {
	     toggleAccordion(i); 
      }
        y.style.display = "none";
    }
  }
}

// These are the open all / close all buttons
function openAll() {
  for (i = 1; i < (list_button.length + 1); i++) {
      var x = document.getElementById("momism" + i); // The div
    if (x.className.indexOf("w3-show") == -1) {
          toggleAccordion(i); 
    }
  }
}
function closeAll() {
  for (i = 1; i < (list_button.length + 1); i++) {
	  console.log("pre: i is " + i);
      var x = document.getElementById("momism" + i); // The div
	  console.log("i is " + i + " and x is " + x);
    if (x.className.indexOf("w3-show") > -1) {
           toggleAccordion(i); 
    }
  }
}

function randomMomism() {
  var num = Math.floor(Math.random() * ({{ site.data.honey-mom-csv.size }} - 1 + 1));
	var randLink = '/list.html#momism_id' + num;
	  window.open(randLink,"_self");
        var x = document.getElementById("momism" + num); // The div
	if (x.className.indexOf("w3-show") == -1) {
		toggleAccordion(num);
	}
}

function toggleAccordion(num) {
  var y = document.getElementById("momism_id" + num); // The button
  var x = document.getElementById("momism" + num); // The div
  var caretid = document.getElementById("caret" + num);
  if (x.className.indexOf("w3-show") == -1/* && y.style.display == ""*/) {
    x.className += " w3-show";
    y.className =
    y.className.replace("smiley", "color-triad-2");
    caretid.className = "fas fa-caret-down bit_left caret";
  } else {
    x.className = x.className.replace(" w3-show", "");
    y.className =
    y.className.replace("color-triad-2", "smiley");
    caretid.className = "fas fa-caret-right caret";
  }
}
