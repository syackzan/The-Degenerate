console.log("Hello");

var buttonBet = document.getElementById("buttonBet");
var buttonF = document.getElementById("buttonF");
var buttonS = document.getElementById("buttonS");
var buttonBase = document.getElementById("buttonBase");
var buttonBask = document.getElementById("buttonBask");


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
    });
}

function getBaseballApi(){
    var soccerApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB";

    fetch(soccerApi)
    .then (function(response){
        console.log(response)

        return response.json();
    })
    .then (function(data){
        console.log(data)
    });
}

function getBasketballApi(){
    var soccerApi = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA";

    fetch(soccerApi)
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
