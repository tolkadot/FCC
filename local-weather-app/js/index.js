
var tempCelsius = 20;
var tempFarenheit;
var firstState = true;
var lat = 0;
var lon = 0;
var myLocation;
var humidity ;
    var windspeed;
    var iconID;

function getDay() {
  console.log( "getDay");
  switch(new Date().getDay()) {
    case 0:
        $('#day').empty().append("Sunday");
        break;
    case 1:
        $('#day').empty().append("Monday");
        break;
    case 2:
        $('#day').empty().append("Tuesday");
        break;
    case 3:
        $('#day').empty().append("Wednesday");
        break;
    case 4:
        $('#day').empty().append("Thursday");
        break;
    case 5:
        $('#day').empty().append("Friday");
        break;
    case 6:
        $('#day').empty().append("Saturday");
        break;
    default:
       $('#day').empty().append("Local Weather");  
}
}

function findUserLocation() {
   // this var is for the c/f toggle button 
  // grab user location coords
  var URL = "https://freegeoip.net/json/";
  $.get(URL, function(data) {
    // if coords, assign to variables and pass to getWeather();
    
       lat = data.latitude;
      lon = data.longitude;
      myLocation = data.city;
      console.log(lat, lon, myLocation, "lon, lat, my location")
     getWeather(lat, lon);
      // else error
  });
        };
function getWeather(lat, lon){
 console.log("here is the " , lon , lat, "getweather Function") ;
 var stringUrl = "https://api.forecast.io/forecast/d021104cb755aada7f58461588e2c482/" + lat +"," + lon
 console.log(stringUrl);
      $.ajax({
  url: ("https://api.forecast.io/forecast/d021104cb755aada7f58461588e2c482/"+ lat +"," + lon) ,
  dataType: "jsonp",
  success: function (data) {
      console.log(data);
      console.log(data.currently.apparentTemperature, "got the data");
      iconID = (data.currently.icon); //get the icon ID **** required
    //var location = (data); //get the location ID **** required
    humidity = Math.round(((data.currently.humidity)*100)) + "%";
  windspeed = Math.round(((data.currently.windSpeed)* 3.6)) + "km/h";
    tempFarenheit = Math.round((data.currently.apparentTemperature));
    tempCelsius = Math.round((tempFarenheit-32)*5/9)
   console.log(tempFarenheit, iconID, windspeed,humidity,tempCelsius ,"parsed the data");
   tempSettings();
  }
}); 
};

// function getWeather(lat, lon) {

//     var req = new XMLHttpRequest(); //
//     console.log("https://api.forecast.io/forecast/d021104cb755aada7f58461588e2c482/"+ lat +"," + lon);
//     //req.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=a140a065ea1765a092c1c17444450de4", false); //format the API request URL
//     req.open("GET", "https://api.forecast.io/forecast/d021104cb755aada7f58461588e2c482/"+ lat +"," + lon, false);
//     req.send(); //send API request
//     console.log(lon, lat,  "getweather");
//     console.log(req.status);
//     console.log(req.statusText);
//     console.log(req.responseText);
//     var responseArr = JSON.parse(req.responseText); //parse the response
//     console.log(responseArr);
//     var tempKelvins = Math.round(responseArr.main.temp); //get the temperature data.
//     var iconID = (responseArr.weather[0].icon); //get the icon ID **** required
//     var location = (responseArr.name); //get the location ID **** required
//     var humidity = (responseArr.main.humidity) + "%";
//     var windspeed = Math.round(((responseArr.wind.speed)* 3.6)) + "km/h";
  
  
//   console.log(windspeed, humidity , "ggggggg");
//     tempCelsius = Math.round(tempKelvins - 273.15); //tempCelsius *** required
//     tempFarenheit = Math.round(((tempKelvins - 273) * 1.8) + 32); //tempFaren *** required

//     console.log(tempKelvins, tempCelsius, tempFarenheit, iconID, location);
    
    // $(document).ready(function(){
    //   if(tempCelsius < 10)
    //   {
    //   $("#foo").addClass("cold");
    //     console.log("cold")
    //   }
    //   else if(tempCelsius > 10 || tempCelsius < 17)
    //   {
    //   $("#foo").addClass("warm");
    //   }
    //   else(tempCelsius > 17)
    //   {
    //   $("#foo").addClass("hot");
    //   }
      
    //   $("#myLocation").text(myLocation);
    //   $("#windSpeed").text(windspeed);
    //   $("#humidity").text(humidity);
      
    //   toggleTemp();
     
      
    //   //$("#icon").attr('src', "https://delvin-tolkadot.c9users.io/FCC/WeatherIcons/" + iconID + ".png");
    // });
  
  
function tempSettings(){
    console.log("got to tempSettings")
    if(tempCelsius < 10)
      {
      $("#foo").addClass("cold");
        console.log("cold")
      }
      else if(tempCelsius > 10 || tempCelsius < 17)
      {
      $("#foo").addClass("warm");
      }
      else(tempCelsius > 17)
      {
      $("#foo").addClass("hot");
      }
      
      $("#myLocation").text(myLocation);
      $("#windSpeed").text(windspeed);
      $("#humidity").text(humidity);
    //   var iconarea = document.getElementById("icon");
    //   console.log(iconarea)
      var url = "https://delvin-tolkadot.c9users.io/FCC/WeatherIcons/" +iconID + ".png";
      console.log(url);
      document.getElementById("icon").style.backgroundImage = "url('https://delvin-tolkadot.c9users.io/FCC/WeatherIcons/partly-cloudy-day.png') no-repeat center";
   
      
      toggleTemp();
}
function toggleTemp() {
    console.log("toggleTemp called")
 
 if (firstState == true) {
//$("#temperatureC").innerHTML(tempCelsius + "C");
   $('#temperature').empty().append(tempCelsius + "C");
   console.log(firstState);
    firstState = false;
   console.log(firstState);
 }
    else
     {
//$("#temperatureF").text(tempFarenheit + "F");
       $('#temperature').empty().append(tempFarenheit + "F");
       firstState = true;
       console.log(firstState);
      
     }
}
findUserLocation();
getDay();

$(document).ready(function(){
 //$("#cfToggle").on("click", toggleTemp);
document.getElementById("cfToggle").addEventListener("click", toggleTemp, false);
});