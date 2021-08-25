console.log("Hello");

var buttonBet = document.getElementById("buttonBet");
var buttonF = document.getElementById("buttonF");


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

    fetch("https://soccer-data.p.rapidapi.com/soccer/team/squad?teamId=801", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "soccer-data.p.rapidapi.com",
            "x-rapidapi-key": "c5acb3456fmsh97e2594e822d81ep1162a1jsncab86d65f643"
        }
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
  
}
  
buttonBet.addEventListener("click", getApi);
buttonF.addEventListener("click", getFootballApi);

