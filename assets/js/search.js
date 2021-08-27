var main = document.getElementById("main");
var headerTwo = document.createElement("h2");
var soccerContainer = document.createElement("div");

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
    soccerContainer = document.createElement("div");
    main.appendChild(soccerContainer);

    var requestUrl = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL"
    //"https://api.the-odds-api.com/v3/sports/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5";
    //var realapi = "https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us";
    //var practiceapi = "https://api.the-odds-api.com/v4/sports/?apiKey=b66e7e8c0ff61e849ff05e77c6e4e2d5&regions=us"

    //Getting Local Storage Items if user wants to see a sport//
    var soccerCheck = localStorage.getItem("soccer");
    var footBallCheck = localStorage.getItem("Football");
    var baseBallCheck = localStorage.getItem("Baseball");
    var basketBallCheck = localStorage.getItem("Basketball");

    if(soccerCheck == "true"){
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
        
        for (var i = 0; i < 10; i++){
            var soccerBox = document.createElement("section");
            var soccerHeader = document.createElement("p");
            var soccerDate = document.createElement("p");
            var soccerTime = document.createElement("p");
            var soccerType = document.createElement("p");
            var soccerOdds = document.createElement("p");
            var soccerHome = document.createElement("p");

            soccerBox.setAttribute("style", "border: 2px solid black; width: 300px; border-radius: 5px; font-size: 16px; margin: 5px; text-align: center; padding: 2px");
            soccerContainer.classList.add("d-flex");
            soccerContainer.classList.add("flex-wrap");

            soccerHeader.textContent = "EPL: Aston vs. Brentfod*" //data[1].bookmakers[4].markets[0].outcomes[0].name + "vs." + data[1].bookmakers[4].markets[0].outcomes[1].name;
            soccerOdds.textContent = "|+1100 Win| Draw: +250 |+126 |" //data[1].bookmakers[4].markets[0].outcomes[0].price + "  " + data[1].bookmakers[4].markets[0].key + "  " + data[1].bookmakers[4].markets[0].outcomes[1].price;
            soccerDate.textContent = "Date: 08/28/21" //data[1].commence_time;
            soccerTime.textContent = "Time: 2:00 ET" //data[1].commence_time;
            soccerType.textContent = "Money Line Odds"; //data[1].bookmakers[4].markets[0].key
            soccerOdds.textContent = "|Win: +1100| Loss: +250 | Draw: +126 |" //data[1].bookmakers[4].markets[0].outcomes[0].price + "  " + data[1].bookmakers[4].markets[0].key + "  " + data[1].bookmakers[4].markets[0].outcomes[1].price;
            soccerHome.textContent = "Home Team: Aston Villa" //data[1].away_team;

            soccerContainer.appendChild(soccerBox);
            soccerBox.appendChild(soccerHeader);
            soccerBox.appendChild(soccerDate);
            soccerBox.appendChild(soccerTime);
            soccerBox.appendChild(soccerOdds);
            soccerBox.appendChild(soccerHome);

        }
    });
    }

    if(footBallCheck == "true"){
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
        
        for (var i = 0; i < 10; i++){
            var soccerBox = document.createElement("section");
            var soccerHeader = document.createElement("p");
            var soccerDate = document.createElement("p");
            var soccerTime = document.createElement("p");
            var soccerType = document.createElement("p");
            var soccerOdds = document.createElement("p");
            var soccerHome = document.createElement("p");

            soccerBox.setAttribute("style", "border: 2px solid blue; width: 300px; border-radius: 5px; font-size: 16px; margin: 5px; text-align: center; padding: 2px");
            soccerContainer.classList.add("d-flex");
            soccerContainer.classList.add("flex-wrap");

            soccerHeader.textContent = "EPL: Aston vs. Brentfod" //data[1].bookmakers[4].markets[0].outcomes[0].name + "vs." + data[1].bookmakers[4].markets[0].outcomes[1].name;
            soccerOdds.textContent = "|+1100 Win| Draw: +250 |+126 |" //data[1].bookmakers[4].markets[0].outcomes[0].price + "  " + data[1].bookmakers[4].markets[0].key + "  " + data[1].bookmakers[4].markets[0].outcomes[1].price;
            soccerDate.textContent = "Date: 08/28/21" //data[1].commence_time;
            soccerTime.textContent = "Time: 2:00 ET" //data[1].commence_time;
            soccerType.textContent = "Money Line Odds"; //data[1].bookmakers[4].markets[0].key
            soccerOdds.textContent = "|Win: +1100| Loss: +250 | Draw: +126 |" //data[1].bookmakers[4].markets[0].outcomes[0].price + "  " + data[1].bookmakers[4].markets[0].key + "  " + data[1].bookmakers[4].markets[0].outcomes[1].price;
            soccerHome.textContent = "Home Team: Aston Villa" //data[1].away_team;

            soccerContainer.appendChild(soccerBox);
            soccerBox.appendChild(soccerHeader);
            soccerBox.appendChild(soccerDate);
            soccerBox.appendChild(soccerTime);
            soccerBox.appendChild(soccerOdds);
            soccerBox.appendChild(soccerHome);

        }
    });
    }

    if(baseBallCheck == "true"){
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
        
        for (var i = 0; i < 10; i++){
            var soccerBox = document.createElement("section");
            var soccerHeader = document.createElement("p");
            var soccerDate = document.createElement("p");
            var soccerTime = document.createElement("p");
            var soccerType = document.createElement("p");
            var soccerOdds = document.createElement("p");
            var soccerHome = document.createElement("p");

            soccerBox.setAttribute("style", "border: 2px solid red; width: 300px; border-radius: 5px; font-size: 16px; margin: 5px; text-align: center; padding: 2px");
            soccerContainer.classList.add("d-flex");
            soccerContainer.classList.add("flex-wrap");

            soccerHeader.textContent = "EPL: Aston vs. Brentfod*" //data[1].bookmakers[4].markets[0].outcomes[0].name + "vs." + data[1].bookmakers[4].markets[0].outcomes[1].name;
            soccerOdds.textContent = "|+1100 Win| Draw: +250 |+126 |" //data[1].bookmakers[4].markets[0].outcomes[0].price + "  " + data[1].bookmakers[4].markets[0].key + "  " + data[1].bookmakers[4].markets[0].outcomes[1].price;
            soccerDate.textContent = "Date: 08/28/21" //data[1].commence_time;
            soccerTime.textContent = "Time: 2:00 ET" //data[1].commence_time;
            soccerType.textContent = "Money Line Odds"; //data[1].bookmakers[4].markets[0].key
            soccerOdds.textContent = "|Win: +1100| Loss: +250 | Draw: +126 |" //data[1].bookmakers[4].markets[0].outcomes[0].price + "  " + data[1].bookmakers[4].markets[0].key + "  " + data[1].bookmakers[4].markets[0].outcomes[1].price;
            soccerHome.textContent = "Home Team: Aston Villa" //data[1].away_team;

            soccerContainer.appendChild(soccerBox);
            soccerBox.appendChild(soccerHeader);
            soccerBox.appendChild(soccerDate);
            soccerBox.appendChild(soccerTime);
            soccerBox.appendChild(soccerOdds);
            soccerBox.appendChild(soccerHome);

        }
    });
    }

    if(basketBallCheck == "true"){
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
        
        for (var i = 0; i < 10; i++){
            var soccerBox = document.createElement("section");
            var soccerHeader = document.createElement("p");
            var soccerDate = document.createElement("p");
            var soccerTime = document.createElement("p");
            var soccerType = document.createElement("p");
            var soccerOdds = document.createElement("p");
            var soccerHome = document.createElement("p");

            soccerBox.setAttribute("style", "border: 2px solid white; width: 300px; border-radius: 5px; font-size: 16px; margin: 5px; text-align: center; padding: 2px");
            soccerContainer.classList.add("d-flex");
            soccerContainer.classList.add("flex-wrap");

            soccerHeader.textContent = "EPL: Aston vs. Brentfod" //data[1].bookmakers[4].markets[0].outcomes[0].name + "vs." + data[1].bookmakers[4].markets[0].outcomes[1].name;
            soccerOdds.textContent = "|+1100 Win| Draw: +250 |+126 |" //data[1].bookmakers[4].markets[0].outcomes[0].price + "  " + data[1].bookmakers[4].markets[0].key + "  " + data[1].bookmakers[4].markets[0].outcomes[1].price;
            soccerDate.textContent = "Date: 08/28/21" //data[1].commence_time;
            soccerTime.textContent = "Time: 2:00 ET" //data[1].commence_time;
            soccerType.textContent = "Money Line Odds"; //data[1].bookmakers[4].markets[0].key
            soccerOdds.textContent = "|Win: +1100| Loss: +250 | Draw: +126 |" //data[1].bookmakers[4].markets[0].outcomes[0].price + "  " + data[1].bookmakers[4].markets[0].key + "  " + data[1].bookmakers[4].markets[0].outcomes[1].price;
            soccerHome.textContent = "Home Team: Aston Villa" //data[1].away_team;

            soccerContainer.appendChild(soccerBox);
            soccerBox.appendChild(soccerHeader);
            soccerBox.appendChild(soccerDate);
            soccerBox.appendChild(soccerTime);
            soccerBox.appendChild(soccerOdds);
            soccerBox.appendChild(soccerHome);

        }
    });
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

//Hovering Selection//

function close (){
    console.log("clickb");
    $(function () {
        $('#aModal').modal("hide");
    });
}

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

$('.close').on('click', close);

soccerContainer.addEventListener("click", function(event){
    modalPopUp(event);
    console.log("click");
});
    