var main = document.getElementById("main");
var headerTwo = document.createElement("h2");
var sportsContainer = document.createElement("div");
var moneyPlaced = $("#moneyPlaced");

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
    sportsContainer = document.createElement("div");
    main.appendChild(sportsContainer);

    var SrequestUrl = "https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us";
    var fRequestUrl = "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us";
    var baseRequestUrl = "https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us";
    var baskRequestUrl = "https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us";

    //"https://api.the-odds-api.com/v3/sports/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5";
    //var realapi = "https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us";
    //var practiceapi = "https://api.the-odds-api.com/v4/sports/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us"

    //Getting Local Storage Items if user wants to see a sport//
    var soccerCheck = localStorage.getItem("soccer");
    var footBallCheck = localStorage.getItem("Football");
    var baseBallCheck = localStorage.getItem("Baseball");
    var basketBallCheck = localStorage.getItem("Basketball");

    if(soccerCheck == "true"){
        fetch(SrequestUrl)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log(response.status);
        }
        return response.json();
    })
    .then (function(data){
        console.log(data);
        
        for (var i = 0; i < data.length; i++){
            var soccerBox = document.createElement("section");
            var soccerHeader = document.createElement("p");
            var soccerDate = document.createElement("p");
            var soccerTime = document.createElement("p");
            var soccerType = document.createElement("p");
            var soccerOdds = document.createElement("p");
            var soccerHome = document.createElement("p");

            soccerBox.setAttribute("style", "border: 2px solid green; width: 300px; border-radius: 5px; font-size: 16px; margin: 5px; text-align: center; padding: 2px");
            sportsContainer.classList.add("d-flex");
            sportsContainer.classList.add("flex-wrap");

            var dateFromApi = data[i].commence_time;
            var finalDate = changeTimeFormat(dateFromApi);

            soccerHeader.textContent = "EPL: " + data[i].bookmakers[4].markets[0].outcomes[0].name + " vs. " + data[i].bookmakers[4].markets[0].outcomes[1].name + "*";
            soccerDate.textContent = "Time: " + finalDate;
            soccerType.textContent = "Money Line Odds: " + data[i].bookmakers[4].markets[0].key
            soccerOdds.textContent = "| Win: " + data[i].bookmakers[4].markets[0].outcomes[0].price + " | Draw: " + " | Lose:  " + data[i].bookmakers[4].markets[0].outcomes[1].price + " |";
            soccerHome.textContent = "Home Team: " + data[i].home_team;

            sportsContainer.appendChild(soccerBox);
            soccerBox.appendChild(soccerHeader);
            soccerBox.appendChild(soccerDate);
            soccerBox.appendChild(soccerTime);
            soccerBox.appendChild(soccerOdds);
            soccerBox.appendChild(soccerHome);

        }
    });
    }

    if(footBallCheck == "true"){
        fetch(fRequestUrl)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log(response.status);
        }
        return response.json();
    })
    .then (function(data){
        console.log(data);
        for (var i = 0; i < data.length; i++){
            var sportsBox = document.createElement("section");
            var sportsHeader = document.createElement("p");
            var sportsDate = document.createElement("p");
            var sportsTime = document.createElement("p");
            var sportsType = document.createElement("p");
            var sportsOdds = document.createElement("p");
            var sportsHome = document.createElement("p");
    
            sportsBox.setAttribute("style", "border: 2px solid red; width: 300px; border-radius: 5px; font-size: 16px; margin: 5px; text-align: center; padding: 2px");
            sportsContainer.classList.add("d-flex");
            sportsContainer.classList.add("flex-wrap");
    
            var dateFromApi = data[i].commence_time;
            var finalDate = changeTimeFormat(dateFromApi);
    
            sportsHeader.textContent = "NFL: " + data[i].bookmakers[0].markets[0].outcomes[0].name + " vs. " + data[i].bookmakers[0].markets[0].outcomes[1].name + "*";
            sportsDate.textContent = "Time: " + finalDate;
            sportsType.textContent = "Money Line Odds: " + data[i].bookmakers[0].markets[0].key
            sportsOdds.textContent = "| Win: " + data[i].bookmakers[0].markets[0].outcomes[0].price + " | Lose:  " + data[i].bookmakers[0].markets[0].outcomes[1].price + " |";
            sportsHome.textContent = "Home Team: " + data[i].home_team;
    
            sportsContainer.appendChild(sportsBox);
            sportsBox.appendChild(sportsHeader);
            sportsBox.appendChild(sportsDate);
            sportsBox.appendChild(sportsTime);
            sportsBox.appendChild(sportsOdds);
            sportsBox.appendChild(sportsHome);
    
        }
        
    });
    }

    if(baseBallCheck == "true"){
        fetch(baseRequestUrl)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log(response.status);
        }
        return response.json();
    })
    .then (function(data){
        console.log(data);
        
        for (var i = 0; i < data.length; i++){
            var sportsBox = document.createElement("section");
            var sportsHeader = document.createElement("p");
            var sportsDate = document.createElement("p");
            var sportsTime = document.createElement("p");
            var sportsType = document.createElement("p");
            var sportsOdds = document.createElement("p");
            var sportsHome = document.createElement("p");
    
            sportsBox.setAttribute("style", "border: 2px solid blue; width: 300px; border-radius: 5px; font-size: 16px; margin: 5px; text-align: center; padding: 2px");
            sportsContainer.classList.add("d-flex");
            sportsContainer.classList.add("flex-wrap");
    
            var dateFromApi = data[i].commence_time;
            var finalDate = changeTimeFormat(dateFromApi);
    
            sportsHeader.textContent = "MLB: " + data[i].bookmakers[0].markets[0].outcomes[0].name + " vs. " + data[i].bookmakers[0].markets[0].outcomes[1].name + "*";
            sportsDate.textContent = "Time: " + finalDate;
            sportsType.textContent = "Money Line Odds: " + data[i].bookmakers[0].markets[0].key
            sportsOdds.textContent = "| Win: " + data[i].bookmakers[0].markets[0].outcomes[0].price + " | Lose:  " + data[i].bookmakers[0].markets[0].outcomes[1].price + " |";
            sportsHome.textContent = "Home Team: " + data[i].home_team;
    
            sportsContainer.appendChild(sportsBox);
            sportsBox.appendChild(sportsHeader);
            sportsBox.appendChild(sportsDate);
            sportsBox.appendChild(sportsTime);
            sportsBox.appendChild(sportsOdds);
            sportsBox.appendChild(sportsHome);
    
        }
    });
    }

    if(basketBallCheck == "true"){
        fetch(baskRequestUrl)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log(response.status);
        }
        return response.json();
    })
    .then (function(data){
        console.log(data);
        
        for (var i = 0; i < data.length; i++){
            var sportsBox = document.createElement("section");
            var sportsHeader = document.createElement("p");
            var sportsDate = document.createElement("p");
            var sportsTime = document.createElement("p");
            var sportsType = document.createElement("p");
            var sportsOdds = document.createElement("p");
            var sportsHome = document.createElement("p");
    
            sportsBox.setAttribute("style", "border: 2px solid white; width: 300px; border-radius: 5px; font-size: 16px; margin: 5px; text-align: center; padding: 2px");
            sportsContainer.classList.add("d-flex");
            sportsContainer.classList.add("flex-wrap");
    
            var dateFromApi = data[i].commence_time;
            var finalDate = changeTimeFormat(dateFromApi);
    
            sportsHeader.textContent = "NBA: " + data[i].bookmakers[0].markets[0].outcomes[0].name + " vs. " + data[i].bookmakers[0].markets[0].outcomes[1].name + "*";
            sportsDate.textContent = "Time: " + finalDate;
            sportsType.textContent = "Money Line Odds: " + data[i].bookmakers[0].markets[0].key
            sportsOdds.textContent = "| Win: " + data[i].bookmakers[0].markets[0].outcomes[0].price + " | Lose:  " + data[i].bookmakers[0].markets[0].outcomes[1].price + " |";
            sportsHome.textContent = "Home Team: " + data[i].home_team;
    
            sportsContainer.appendChild(sportsBox);
            sportsBox.appendChild(sportsHeader);
            sportsBox.appendChild(sportsDate);
            sportsBox.appendChild(sportsTime);
            sportsBox.appendChild(sportsOdds);
            sportsBox.appendChild(sportsHome);
    
        }
    });
    }

    
}

function runApiOdds (data){
    
    for (var i = 0; i < data.length; i++){
        var sportsBox = document.createElement("section");
        var sportsHeader = document.createElement("p");
        var sportsDate = document.createElement("p");
        var sportsTime = document.createElement("p");
        var sportsType = document.createElement("p");
        var sportsOdds = document.createElement("p");
        var sportsHome = document.createElement("p");

        sportsBox.setAttribute("style", "border: 2px solid black; width: 300px; border-radius: 5px; font-size: 16px; margin: 5px; text-align: center; padding: 2px");
        sportsContainer.classList.add("d-flex");
        sportsContainer.classList.add("flex-wrap");

        var dateFromApi = data[i].commence_time;
        var finalDate = changeTimeFormat(dateFromApi);

        sportsHeader.textContent = "NFL: " + data[i].bookmakers[0].markets[0].outcomes[0].name + " vs. " + data[i].bookmakers[0].markets[0].outcomes[1].name + "*";
        sportsDate.textContent = "Time: " + finalDate;
        sportsType.textContent = "Money Line Odds: " + data[i].bookmakers[0].markets[0].key
        sportsOdds.textContent = "| Win: " + data[i].bookmakers[0].markets[0].outcomes[0].price + " | Lose:  " + data[i].bookmakers[0].markets[0].outcomes[1].price + " |";
        sportsHome.textContent = "Home Team: " + data[i].home_team;

        sportsContainer.appendChild(sportsBox);
        sportsBox.appendChild(sportsHeader);
        sportsBox.appendChild(sportsDate);
        sportsBox.appendChild(sportsTime);
        sportsBox.appendChild(sportsOdds);
        sportsBox.appendChild(sportsHome);

    }
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

function retrieveAPI(data){

}

function changeTimeFormat(dateTime){
    console.log(dateTime);
    var formattedDate = moment(dateTime).format("M/D/YY @ H:mm PT")
    
    return formattedDate;
}

function deleteContent(league){
    main.innerHTML = "";
    headerTwo.textContent = league;
    main.appendChild(headerTwo);
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

//Modal A Pop Up Function - Allows you to place a bet//
function modalPopUp(event){
    var element = event.target;
    console.log(element);

    if (element.matches("section")){
        var modalText = element.textContent.split("*")[0];
        $(function () {
            $('#aModal').modal("show");
            $('.modal-title').text("PLACE A BET FOR: ");
            $('.modal-body-text').text(modalText); 
        });
    } 
} 

//Closes aModal and opens bModal showing a placed bet//
function saveYourBet(){
    var moneyPlacedF = moneyPlaced.val();
    $(function () {
        $('#aModal').modal("hide");
    });
    $(function () {
        $('#bModal').modal("show");
        $('.modal-title').text("BET PLACED!");
        $('.modal-body-text').text("Congratulations your bet of $" + moneyPlacedF + " is complete"); 
    });
}

//Closese Modal when X button is clicked//
function close (){
    console.log("clickb");
    $(function () {
        $('#aModal').modal("hide");
    });
    $(function () {
        $('#bModal').modal("hide");
    });
}

//Calls function above to close Modal//
$('.close').on('click', close);

//Calls Function to Add Bet and Close Modal//
$('.btn').on('click', saveYourBet)

//Event Listener To target Soccer Container So modals come up//
sportsContainer.addEventListener("click", function(event){
    modalPopUp(event);
    console.log("click");
});
    