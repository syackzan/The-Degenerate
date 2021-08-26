var main = document.getElementById("main");
var headerTwo = document.createElement("h2");

//function to remove url specification into a variable//
function parameterSelection (){
    var searchParamsArr = document.location.search.split('=').pop();
    //console.log(searchParamsArr);

    return searchParamsArr;
}

//Pulling API's and Printing Information on the Console//
//Order Books API//
function getOddsApi(){
    
    var sporty = "Games & Odds Below";
    deleteContent(sporty);
    var soccerContainer = document.createElement("div");
    main.appendChild(soccerContainer);

    var requestUrl = "https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us&dateFormat=iso";
    //var realapi = "https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us";
    //var practiceapi = "https://api.the-odds-api.com/v4/sports/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us"

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
        var soccerBox = document.createElement("div");
        var soccerHeader = document.createElement("p");
        var soccerDate = document.createElement("p");
        var soccerTime = document.createElement("p");
        var soccerOdds = document.createElement("p");
        var soccerHome = document.createElement("p")

        soccerHeader.textContent = data[1].bookmakers[4].markets[0].outcomes[0].name + "vs." + data[1].bookmakers[4].markets[0].outcomes[1].name;
        soccerDate.textContent = data[1].commence_time;
        soccerTime.textContent = data[1].commence_time;
        soccerOdds.textContent = data[1].bookmakers[4].markets[0].outcomes[0].price + "  " + data[1].bookmakers[4].markets[0].key + "  " + data[1].bookmakers[4].markets[0].outcomes[1].price;
        soccerHome.textContent = data[1].away_team;

        soccerContainer.appendChild(soccerBox);
        soccerBox.appendChild(soccerHeader);
        soccerBox.appendChild(soccerDate);
        soccerBox.appendChild(soccerTime);
        soccerBox.appendChild(soccerOdds);
        soccerBox.appendChild(soccerHome);
    });

    
}

//Football Teams API Request//
function getFootballApi() {

    var sporty = "National Football League (NFL) Teams";
    deleteContent(sporty);
    
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
            
            main.appendChild(sTeamBox);
            sTeamBox.appendChild(sTeamLogo);
            sTeamBox.appendChild(sTeamName);
            sTeamBox.appendChild(sTeamDescription);
            sTeamBox.appendChild(sTeamWebsite);
        }
    });
  
}

//Soccer Teams API Request//
function getSoccerApi(){
    
    var sporty = "English Premier League (EPL) Teams";
    deleteContent(sporty);

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
            
            main.appendChild(sTeamBox);
            sTeamBox.appendChild(sTeamLogo);
            sTeamBox.appendChild(sTeamName);
            sTeamBox.appendChild(sTeamDescription);
            sTeamBox.appendChild(sTeamWebsite);
        }
    });
}

//Baseball Teams API request//
function getBaseballApi(){
    
    var sporty = "Major League Baseball (MLB) Teams";
    deleteContent(sporty);
    
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
            
            main.appendChild(sTeamBox);
            sTeamBox.appendChild(sTeamLogo);
            sTeamBox.appendChild(sTeamName);
            sTeamBox.appendChild(sTeamDescription);
            sTeamBox.appendChild(sTeamWebsite);
        }
    });
}

//Basketball Teams API request//
function getBasketballApi(){
    
    var sporty = "National Basketball Association (NBA) Teams"
    deleteContent(sporty);
    
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
            
            main.appendChild(sTeamBox);
            sTeamBox.appendChild(sTeamLogo);
            sTeamBox.appendChild(sTeamName);
            sTeamBox.appendChild(sTeamDescription);
            sTeamBox.appendChild(sTeamWebsite);
        }
    });
}

function deleteContent(league){
    main.innerHTML = "";
    headerTwo.textContent = league;
    main.appendChild(headerTwo);
}

function printSoccerBets(i){
    var soccerBox = document.createElement("div");
    var soccerHeader = document.createElement("p");
    var soccerDate = document.createElement("p");
    var soccerTime = document.createElement("p");
    var soccerOdds = document.createElement("p");
    var soccerHome = document.createElement("p")

    soccerHeader.textContent = data[i].bookmakers[4].markets[0].outcomes[0].name + "vs." + data[i].bookmakers[4].markets[0].outcomes[1].name;
    soccerDate.textContent = data[i].commence_time;
    soccerTime.textContent = data[i].commence_time;
    soccerOdds.textContent = data[i].bookmakers[4].markets[0].outcomes[0].price + "  " + data[i].bookmakers[4].markets[0].key + "  " + data[i].bookmakers[4].markets[0].outcomes[1].price;
    soccerHome.textContent = data[i].away-teamContainer;

    soccerContainer.appendChild(soccerBox);
    soccerBox.appendChild(soccerHeader);
    soccerBox.appendChild(soccerDate);
    soccerBox.appendChild(soccerTime);
    soccerBox.appendChild(soccerOdds);
    soccerBox.appendChild(soccerHome);

}

//Firing & Pulling URL Element//
parameterSelection()

if (parameterSelection() == "football"){
    getFootballApi();
} else if (parameterSelection() == "soccer"){
    getSoccerApi();
} else if (parameterSelection() == "baseball"){
    getBaseballApi();
} else if (parameterSelection() == "basketball"){
    getBasketballApi();
} else if (parameterSelection() == "odds"){
    getOddsApi();
}else {
    console.log("fail");
}