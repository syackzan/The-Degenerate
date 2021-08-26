console.log("Hello");

//Referencing HTML Buttons//
var buttonBet = document.getElementById("buttonBet");
var buttonF = document.getElementById("buttonF");
var buttonS = document.getElementById("buttonS");
var buttonBase = document.getElementById("buttonBase");
var buttonBask = document.getElementById("buttonBask");
var teamContainer = document.getElementById("checkbox");

//Pulling API for Sports Book & Odds of Games//
function getApi(){

    var requestUrl = "https://api.the-odds-api.com/v4/sports/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us";
    //var storage = "https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us";//

    fetch(requestUrl)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log(response.status);
        }
        return response.json();
    })
    .then (function(data){
        console.log(data);
    });
  }

//Football API Request//
function getFootballApi() {

    var footballApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL";

    fetch(footballApi)
    .then (function(response){
        console.log(response)

        return response.json();
    })
    .then (function(data){
        console.log(data)
        for (var i = 0; i < data.teams.length; i++){
            var sTeamBox = document.createElement("div");
            var sTeamLogo = document.createElement("img");
            var sTeamName = document.createElement("p");
            var sTeamDescription = document.createElement("p");
            var sTeamWebsite = document.createElement("a");

            sTeamLogo.src = data.teams[i].strTeamBadge;
            sTeamName.textContent = data.teams[i].strTream;
            sTeamDescription.textContent = data.teams[i].strDescriptionEN;
            sTeamWebsite.textContent = data.teams[i].strWebsite;
            sTeamWebsite.href = data.teams[i].strWebsite;
            
            sTeamBox.setAttribute("style", "margin: 5px; border: 2px solid black");
            sTeamLogo.setAttribute("style", "width: 50px; height: 50px;")
            sTeamName.setAttribute("style", "font-weight: bold");
            sTeamDescription.setAttribute("style", "font-size: 16px")
            sTeamWebsite.setAttribute("style", "font-size: 16px")
            
            teamContainer.appendChild(sTeamBox);
            sTeamBox.appendChild(sTeamLogo);
            sTeamBox.appendChild(sTeamName);
            sTeamBox.appendChild(sTeamDescription);
            sTeamBox.appendChild(sTeamWebsite);
        }
    });
  
}

//Soccer API Request//
function getSoccerApi(){
    var soccerApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

    fetch(soccerApi)
    .then (function(response){
        console.log(response)

        return response.json();
    })
    .then (function(data){
        console.log(data);
        console.log(data);
        for (var i = 0; i < data.teams.length; i++){
            var sTeamBox = document.createElement("div");
            var sTeamLogo = document.createElement("img");
            var sTeamName = document.createElement("p");
            var sTeamDescription = document.createElement("p");
            var sTeamWebsite = document.createElement("a");

            sTeamLogo.src = data.teams[i].strTeamBadge;
            sTeamName.textContent = data.teams[i].strTream;
            sTeamDescription.textContent = data.teams[i].strDescriptionEN;
            sTeamWebsite.textContent = data.teams[i].strWebsite;
            sTeamWebsite.href = data.teams[i].strWebsite;
            
            sTeamBox.setAttribute("style", "margin: 5px; border: 2px solid black");
            sTeamLogo.setAttribute("style", "width: 50px; height: 50px;")
            sTeamName.setAttribute("style", "font-weight: bold");
            sTeamDescription.setAttribute("style", "font-size: 16px")
            sTeamWebsite.setAttribute("style", "font-size: 16px")
            
            teamContainer.appendChild(sTeamBox);
            sTeamBox.appendChild(sTeamLogo);
            sTeamBox.appendChild(sTeamName);
            sTeamBox.appendChild(sTeamDescription);
            sTeamBox.appendChild(sTeamWebsite);
        }
    });
}

//Baseball API request//
function getBaseballApi(){
    var baseBallApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB";

    fetch(baseBallApi)
    .then (function(response){
        console.log(response)

        return response.json();
    })
    .then (function(data){
        console.log(data)
        for (var i = 0; i < data.teams.length; i++){
            var sTeamBox = document.createElement("div");
            var sTeamLogo = document.createElement("img");
            var sTeamName = document.createElement("p");
            var sTeamDescription = document.createElement("p");
            var sTeamWebsite = document.createElement("a");

            sTeamLogo.src = data.teams[i].strTeamBadge;
            sTeamName.textContent = data.teams[i].strTream;
            sTeamDescription.textContent = data.teams[i].strDescriptionEN;
            sTeamWebsite.textContent = data.teams[i].strWebsite;
            sTeamWebsite.href = data.teams[i].strWebsite;
            
            sTeamBox.setAttribute("style", "margin: 5px; border: 2px solid black");
            sTeamLogo.setAttribute("style", "width: 50px; height: 50px;")
            sTeamName.setAttribute("style", "font-weight: bold");
            sTeamDescription.setAttribute("style", "font-size: 16px")
            sTeamWebsite.setAttribute("style", "font-size: 16px")
            
            teamContainer.appendChild(sTeamBox);
            sTeamBox.appendChild(sTeamLogo);
            sTeamBox.appendChild(sTeamName);
            sTeamBox.appendChild(sTeamDescription);
            sTeamBox.appendChild(sTeamWebsite);
        }
    });
}

//Basketball API request//
function getBasketballApi(){
    var basketBallApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA";

    fetch(basketBallApi)
    .then (function(response){
        console.log(response)

        return response.json();
    })
    .then (function(data){
        console.log(data)
        for (var i = 0; i < data.teams.length; i++){
            var sTeamBox = document.createElement("div");
            var sTeamLogo = document.createElement("img");
            var sTeamName = document.createElement("p");
            var sTeamDescription = document.createElement("p");
            var sTeamWebsite = document.createElement("a");

            sTeamLogo.src = data.teams[i].strTeamBadge;
            sTeamName.textContent = data.teams[i].strTream;
            sTeamDescription.textContent = data.teams[i].strDescriptionEN;
            sTeamWebsite.textContent = data.teams[i].strWebsite;
            sTeamWebsite.href = data.teams[i].strWebsite;
            
            sTeamBox.setAttribute("style", "margin: 5px; border: 2px solid black");
            sTeamLogo.setAttribute("style", "width: 50px; height: 50px;")
            sTeamName.setAttribute("style", "font-weight: bold");
            sTeamDescription.setAttribute("style", "font-size: 16px")
            sTeamWebsite.setAttribute("style", "font-size: 16px")
            
            teamContainer.appendChild(sTeamBox);
            sTeamBox.appendChild(sTeamLogo);
            sTeamBox.appendChild(sTeamName);
            sTeamBox.appendChild(sTeamDescription);
            sTeamBox.appendChild(sTeamWebsite);
        }
    });
}
  

//Add event Listeners for various Buttons//
buttonBet.addEventListener("click", getApi);
buttonF.addEventListener("click", getFootballApi);
buttonS.addEventListener("click", getSoccerApi);
buttonBase.addEventListener("click", getBaseballApi);
buttonBask.addEventListener("click", getBasketballApi);

var checkBox = $("#checkBox");

var option1 = $("#inlineCheckbox1");
console.log(option1)

var option2 = $("#inlineCheckbox2");

var option3 = $("#inlineCheckbox3");

var option4 = $("#inlineCheckbox4");

var option5 = $("#inlineCheckbox5");

var option6 = $("#inlineCheckbox6");

checkBox.on('click', function(){
    localStorage.setItem("Baseball", (option1.is()));
    localStorage.setItem("Basketball", (option2.is()));
    localStorage.setItem("Football", (option3.is()));
    localStorage.setItem("Golf", (option4.is()));
    localStorage.setItem("Hockey", (option5.is()));
    localStorage.setItem("Soccer", (option6.is()));
})

$("#inlineCheckbox1").append(localStorage.getItem("Baseball"));
$("#inlineCheckbox2").append(localStorage.getItem("Basketball"));
$("#inlineCheckbox3").append(localStorage.getItem("Football"));
$("#inlineCheckbox4").append(localStorage.getItem("Golf"));
$("#inlineCheckbox5").append(localStorage.getItem("Hocky"));
$("#inlineCheckbox6").append(localStorage.getItem("Soccer"));

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