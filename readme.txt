
temperature = document.querySelector(".temperature");
    querySelector() return the first element that matches a CSS selector
    element = document.querySelector(CSS selectors)
    .temperature -> class selector


addEventListener: 
    attach a event handler to an element 
    element.addEventListener("click", function(){ alert("Hello World!"); });


window object: 
    window object is a window or a tab? -> tab, quote verbatim "In a tabbed browser, each tab is represented by its own Window object"
    window.open() is used to open a new browser or a new tab depending on the browser setting and parameters
    contains The Document Object as its property, ex: window.document.getElementById(...)
    keyword: Browser Object Model

load event:
    load ~ onload, just different syntax
    the event occurs when an object has been loaded


getCurrentPosition: 
    contains a callback function that takes a Position object as its sole parameter
    ex: navigator.geolocation.getCurrentPosition((position)=>{ ... });


get the location stuff -> browser api
openweather -> third party api


check the documentation for the api: 
    click "api" -> find "current weather data" -> click "api doc"


get the data: fetch
    allows web browser to make HTTP requests to web servers.
    fetch(url) -> return a promise, if success, the request completes, the resource is 
        available, the promise will resolve into a Response object
    syntax: fetch('/readme.txt')
                .then((a) => {return a.json();})   -> convert response into JSON data
                .then((b) => {...});               -> another then() statement to process the data


https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
https://www.javascripttutorial.net/javascript-fetch-api/


Asynchronous stuff: do something after you finished something.
    It's actually pretty simple, it seems complicated since you try to learn a concept through so many 
    intermediary layers. Understand async/await -> understand promise -> understand callback. All 
    of it are basically the samething but in different form, different syntax !!!!
    



