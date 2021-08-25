console.log("Hello");

var buttonBet = document.getElementById("buttonBet");
var buttonF = document.getElementById("buttonF");
var buttonS = document.getElementById("buttonS");
var buttonBase = document.getElementById("buttonBase");
var buttonBask = document.getElementById("buttonBask");
var teamContainer = document.getElementById("teamContainer");


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

function getFootballApi() {

    var footballApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL";
    //https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4346
    //https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL

    fetch(footballApi)
    .then (function(response){
        console.log(response)

        return response.json();
    })
    .then (function(data){
        console.log(data)
    });
  
}

function getSoccerApi(){
    var soccerApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

    fetch(soccerApi)
    .then (function(response){
        console.log(response)

        return response.json();
    })
    .then (function(data){
        console.log(data)

        for (var i = 0; i < teams.length; i++){
            var sTeamBox = document.createElement("div");
            var sTeamLogo = document.createElement("img");
            var sTeamName = document.createElement("p");
            var sTeamDescription = document.createElement("p");
            var sTeamWebsite = document.createElement("a");

            sTeamLogo.src = data[i].strTeamBadge;
            sTeamName.textContent = data[i].strTream;
            sTeamDescription = data[i].strDescriptionEN;
            sTeamWebsite = data[i].strWebsite;

            sTeamBox.setAttribute("style", "margin: 5x");

            teamContainer.appendChild(sTeamBox);
            sTeamBox.appendChild(sTeamLogo);
            sTeamBox.appendChild(sTeamName);
            sTeamBox.appendChild(sTeamDescription);
            sTeamBox.appendChild(sTeamWebsite);
        }
    });
}

function getBaseballApi(){
    var baseBallApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB";

    fetch(baseBallApi)
    .then (function(response){
        console.log(response)

        return response.json();
    })
    .then (function(data){
        console.log(data)
    });
}

function getBasketballApi(){
    var basketBallApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA";

    fetch(basketBallApi)
    .then (function(response){
        console.log(response)

        return response.json();
    })
    .then (function(data){
        console.log(data)
    });
}
  
buttonBet.addEventListener("click", getApi);
buttonF.addEventListener("click", getFootballApi);
buttonS.addEventListener("click", getSoccerApi);
buttonBase.addEventListener("click", getBaseballApi);
buttonBask.addEventListener("click", getBasketballApi);

