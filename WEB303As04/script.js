/*
    Assignment 4
    Nguyen Le
*/

$(document).ready(function(){
    // your code here
    let lat1 = localStorage.getItem('lat1');
    let lon1 = localStorage.getItem('lon1');
    let lat2 = localStorage.getItem('lat2');
    let lon2 = localStorage.getItem('lon2'); 

        navigator.geolocation.getCurrentPosition((position) => {
        $('#youarehere').append("<h2>You are here at this Current Location</h2>" + position.coords.latitude + " , " + position.coords.longitude);
            console.log('geolocation is showing');

            if(!localStorage.getItem(lat1) && !localStorage.getItem(lon1)) {
                localStorage.setItem(lat1, position.coords.latitude);
                localStorage.setItem(lon1, position.coords.longitude);        
                 $('#youarehere').append("<h2>Compared lat 1 and lon 1</h2>");
            }   else 
            if(localStorage.getItem(lat1) && localStorage.getItem(lon1)) {
                $('#youarehere').append('<h2>Your previous location was at </h2>' + position.coords.latitude + " , " + position.coords.longitude);
                localStorage.setItem(lat2, position.coords.latitude);
                localStorage.setItem(lon2, position.coords.longitude); 
                $('#youarehere').append("<h2>You have moved a Distance of </h2>" + calcDistance(lat1, lon1, lat2, lon2));  
        }
    }, () => {
       $('#youarehere').append("<h2>The Geolocation you are trying to access is unavailable</h2>");
        console.log('The Geolocation you are trying to access is not available');
    }); 

    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
     function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


