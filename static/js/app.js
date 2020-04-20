// from data.js
var ufoData = data;

// leaflet map import

let accessToken = "pk.eyJ1IjoiY2VyZWphcm9zaW5oYSIsImEiOiJjanMxNzA4c2Excjg2NDlwZG9sbTB3NXM3In0.XnJlhKPl64KMkzAMzd0D3A";
// leaflet
var map = L.map('map').setView([35.505, -95.4], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let markerLayer = L.layerGroup()
    .addTo(map);

// table d3
var tbody = d3.select('tbody');
// loop through the data and append table (tbody in the html)

var fields = ['datetime', 'city', 'state', 'country', 'shape', "duration (hours/min)", 'comments']

function write_row(oneSighting) {
    // console.log(oneSighting);

    var row = tbody.append('tr');
    var cell;
    for(var field of fields){

        cell = row.append('td')
        cell.text(oneSighting[field])

    }
    L.marker([oneSighting['latitude'], oneSighting['longitude ']]).addTo(markerLayer)
    .bindPopup(oneSighting['comments'])
    .openPopup();
}


//for looping through inputs on change
var inputs = ['datetime', 'state', 'city', 'comments'];
var submit = d3.select('#filter-btn');

var filter = d3.selectAll(".filter");

filter.on('change', function() { 

    // d3.event.preventDefault();
    tbody.html("");
    markerLayer.clearLayers();
    var filteredData = ufoData;
    for(var input of inputs){
        var inputElement = d3.select('#'+input);
        var inputValue = inputElement.property('value');
        // console.log(inputValue);

        filteredData = filteredData.filter(function(entry){

            return entry[input].toLowerCase().includes(inputValue.toLowerCase());

        });
    }

    //66k lines, too much to show limited to 200
    filteredData.slice(0, 20).forEach(write_row);
    console.log(filteredData[0])
});




// L.marker(filteredData).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: accessToken;
// }).addTo(mymap);