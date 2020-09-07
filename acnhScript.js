//Set variables

//Variables for setting Month

var monthButtons = document.getElementsByClassName("availableMonth");
var month = new Date().getMonth() + 8;

//Critter availability in the Northern Hemisphere
var northHemFish = document.getElementsByClassName("fishNorth");
var northHemBugs = document.getElementsByClassName("bugsNorth");
var northHemSeaCr = document.getElementsByClassName("seaNorth");

//Variables for selecting tabs

var tabcontent = document.getElementsByClassName("tabcontent");
var tablinks = document.getElementsByClassName("tablinks");

//Function for selecting tabs
function openList(evt, listName) {

  // Get all elements with class="tabcontent" and hide them
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(listName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Function to display critters available for the Month
/* function available(creature) {
  if(creature[i].getElementsByTagName("td")[month].innerHTML == "x") {
    creature[i].style.display = "table-row";
  }else {
    creature[i].style.display = "none";
  }
    }
    */

//display by month buttons

function displayMonth(x){
  var month = x + 7;

//function to highlight the month button selected
for (var i = 0; i < monthButtons.length; i++) {
  monthButtons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("monthSelected");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" monthSelected", "");
    }
    // Add the active class to the current/clicked button
    this.className += " monthSelected";
  });
}
  //Functions to display critters based on buttons clicked
  if (month === 7) {
    for(var i=0; i < northHemFish.length; i++) {
    northHemFish[i].style.display = "table-row";
  }
    for(var i=0; i < northHemBugs.length; i++) {
      northHemBugs[i].style.display = "table-row";
    }
    for(var i=0; i < northHemSeaCr.length; i++) {
      northHemSeaCr[i].style.display = "table-row";
    }
  }
    else {
    //Function to display available fish
    for(var i=0; i < northHemFish.length; i++) {
      if(northHemFish[i].getElementsByTagName("td")[month].innerHTML == "x") {
        northHemFish[i].style.display = "table-row";
      }else {
        northHemFish[i].style.display = "none";
      }
    }

    //Function to display available bugs
    for(var i=0; i < northHemBugs.length; i++) {
      if(northHemBugs[i].getElementsByTagName("td")[month-1].innerHTML == "x") {
        northHemBugs[i].style.display = "table-row";
      }else {
        northHemBugs[i].style.display = "none";
      }
    }

    //Function to display Sea creatures Available
    for(var i=0; i < northHemSeaCr.length; i++) {
      if(northHemSeaCr[i].getElementsByTagName("td")[month].innerHTML == "x") {
        northHemSeaCr[i].style.display = "table-row";
      }else {
        northHemSeaCr[i].style.display = "none";
      }
  }
}
}

//Function to display fish available for the current Month
  window.onload = function () {
    //Function to display available fish
    for(var i=0; i < northHemFish.length; i++) {
      if(northHemFish[i].getElementsByTagName("td")[month].innerHTML == "x") {
        northHemFish[i].style.display = "table-row";
      }else {
        northHemFish[i].style.display = "none";
      }
      northHemFish[i].getElementsByTagName("td")[7].style.borderRadius = "0 6px 6px 0";
    }
    //To display available bugs
    for(var i=0; i < northHemBugs.length; i++) {
      if(northHemBugs[i].getElementsByTagName("td")[month-1].innerHTML == "x") {
        northHemBugs[i].style.display = "table-row";
      }else {
        northHemBugs[i].style.display = "none";
      }
      northHemBugs[i].getElementsByTagName("td")[6].style.borderRadius = "0 6px 6px 0";
    }

    //To display Sea creatures Available
    for(var i=0; i < northHemSeaCr.length; i++) {
      if(northHemSeaCr[i].getElementsByTagName("td")[month].innerHTML == "x") {
        northHemSeaCr[i].style.display = "table-row";
      }else {
        northHemSeaCr[i].style.display = "none";
      }
      northHemSeaCr[i].getElementsByTagName("td")[7].style.borderRadius = "0 6px 6px 0";
    }
  tablinks[0].className += " active";
  document.getElementById("bugs").style.display = "none";
  document.getElementById("seaCreatures").style.display = "none";
}
