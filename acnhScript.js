//Set variables

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

//display all button
var count = 0;
function displayAll(){

  var display = document.getElementById("display");

  if (count === 0) {
    display.style.backgroundColor = "#D5ECDF";
    display.style.color = "#7FCECB";

    for(var i=0; i < northHemFish.length; i++) {
    northHemFish[i].style.display = "table-row";
  }
    for(var i=0; i < northHemBugs.length; i++) {
      northHemBugs[i].style.display = "table-row";
    }
    for(var i=0; i < northHemSeaCr.length; i++) {
      northHemSeaCr[i].style.display = "table-row";
    }
    count = 1;
  }

    else {

    display.style.backgroundColor = "#7FCECB";
    display.style.color = "#E1F4F3";

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
    count = 0;
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
  tablinks[0].className += " active";
  document.getElementById("bugs").style.display = "none";
  document.getElementById("seaCreatures").style.display = "none";
}
