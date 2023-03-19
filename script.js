
let temperature=document.querySelector(".temperature");
let summary=document.querySelector(".summary");
let loc=document.querySelector(".location");                                     
let icon=document.querySelector(".icon");

let lon;
let lat;
window.addEventListener("load", () => {
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);
        lon=position.coords.longitude;
        lat=position.coords.latitude;
        //alert(lon);
        //alert(lat);
    });

    let apikey="4755b750a5193b1d8fa1c21568e63c20";
    let baseurl="https://api.openweathermap.org/data/2.5/weather?lat=39.90&lon=116.38&appid=4755b750a5193b1d8fa1c21568e63c20";
    
    fetch(baseurl)  
        .then((response)=>{return response.json();})
        .then((data)=>{console.log(data);
            temperature.textContent=(data.main.temp-273).toFixed(2)+"°C";
            summary.textContent=data.weather[0].main;
            loc.textContent=data.name+", "+data.sys.country;
        
        });

});






