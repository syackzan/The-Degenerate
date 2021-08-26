console.log("Hello");

//Referencing HTML Buttons//
var buttonBet = document.getElementById("buttonBet");
var buttonF = document.getElementById("buttonF");
var buttonS = document.getElementById("buttonS");
var buttonBase = document.getElementById("buttonBase");
var buttonBask = document.getElementById("buttonBask");
var teamContainer = document.getElementById("checkbox");
var redirectHTML = "./search.html";

//Loading Specific Strings in the Parameters//
function loadFootballHtml () {
    var football = "football";
    searchHTML(football);
}

function loadSoccerHtml(){
    var soccer = "soccer";
    searchHTML(soccer);
}

function loadBaseballHtml(){
    var baseball = "baseball";
    searchHTML(baseball);
}

function loadBasketballHtml(){
    var basketball = "basketball";
    searchHTML(basketball);
}

//Add event Listeners for various Buttons//
buttonF.addEventListener("click", loadFootballHtml);
buttonS.addEventListener("click", loadSoccerHtml);
buttonBase.addEventListener("click", loadBaseballHtml);
buttonBask.addEventListener("click", loadBasketballHtml);

var checkBox = $("#checkBox");

var option1 = $("#inlineCheckbox1");
console.log(option1)

var option2 = $("#inlineCheckbox2");

var option3 = $("#inlineCheckbox3");

var option4 = $("#inlineCheckbox4");

checkBox.on('click', function(){
    localStorage.setItem("Baseball", (option1.is()));
    localStorage.setItem("Basketball", (option2.is()));
    localStorage.setItem("Football", (option3.is()));
    localStorage.setItem("soccer", (option4.is()));

})

$("#inlineCheckbox1").append(localStorage.getItem("Baseball"));
$("#inlineCheckbox2").append(localStorage.getItem("Basketball"));
$("#inlineCheckbox3").append(localStorage.getItem("Football"));
$("#inlineCheckbox4").append(localStorage.getItem("Soccer"));
$("#inlineCheckbox5").append(localStorage.getItem("All"));


function save() {	
	var checkbox = document.getElementById("inlineCheckbox1");
    localStorage.setItem("Baseball", checkbox.checked);	
}

//for loading
    var checked = JSON.parse(localStorage.getItem("Baseball"));
    document.getElementById("inlineCheckbox1").checked = checked;

function save() {	
	var checkbox = document.getElementById("inlineCheckbox2");
    localStorage.setItem("Basketball", checkbox.checked);	
}

//for loading
    var checked = JSON.parse(localStorage.getItem("Basketball"));
    document.getElementById("inlineCheckbox2").checked = checked;

function save() {	
    var checkbox = document.getElementById("inlineCheckbox3");
        localStorage.setItem("Football", checkbox.checked);	
    }
    
    //for loading
    var checked = JSON.parse(localStorage.getItem("Football"));
        document.getElementById("inlineCheckbox3").checked = checked;

function save() {	
    var checkbox = document.getElementById("inlineCheckbox4");
            localStorage.setItem("Soccer", checkbox.checked);	
        }
        
        //for loading
    var checked = JSON.parse(localStorage.getItem("Soccer"));
    document.getElementById("inlineCheckbox4").checked = checked;

function save() {	
    var checkbox = document.getElementById("inlineCheckbox5");
    localStorage.setItem("All", checkbox.checked);	
    }
    
    //for loading
    var checked = JSON.parse(localStorage.getItem("All"));
    document.getElementById("inlineCheckbox5").checked = checked;

//Function Go to Search HTML//
function searchHTML(sport){
    var queryString = './search.html?q=' + sport;
    location.assign(queryString);
}

//DatePicker Widget//
$( function() {
    $( "#datepicker" ).datepicker();
  } );

//Auto-Fill Time Picker//
$( function() {
    var availableTags = [
      "8:00am",
      "9:00am",
      "10:00am",
      "11:00am",
      "12:00pm",
      "1:00pm",
      "2:00pm",
      "3:00pm",
      "4:00pm",
      "5:00pm",
      "6:00pm",
      "7:00pm",
      "8:00pm",
      "9:00pm",
      "10:00pm",
      "11:00pm",
      "12:00am",
      "Now",
      "Anytime"
    ];
    $( "#time" ).autocomplete({
      source: availableTags
    });
  } );
