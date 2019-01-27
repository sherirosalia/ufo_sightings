// from data.js
var ufoData = data;



// YOUR CODE HERE!

// Console.log the ufo data from data.js

console.log(ufoData);


//get a reference to the table body

var tbody = d3.select('tbody');
// loop through the data and append table (tbody in the html)

function write_row(Sightings) {
    console.log(Sightings);
    var row = tbody.append('tr');
     
   
    Object.entries(Sightings).forEach(function([key, value]) {
        console.log(key, value);

        var cell = tbody.append('td')
        cell.text(value);


    })
}


ufoData.forEach(write_row)


var submit = d3.select('#filter-btn')

submit.on('click', function() {

    d3.event.preventDefault();
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');
    console.log(inputValue);
    console.log(ufoData);


    var filteredData = ufoData.filter(function(entry){
        return entry.datetime === inputValue;
    })

    tbody.html("")
    filteredData.forEach(write_row)

    console.log(filteredData)
});



//console.log(filteredData);


// //create filter 

// var people = data;
// //console.log(people)

// // Select the submit button
// var submit = d3.select("#filter-btn");

// // Complete the click handler for the form
// submit.on("click", function() {

// // Prevent the page from refreshing

//   d3.event.preventDefault();

// // Select the input element and get the raw HTML node

//   var inputElement = d3.select('#datetime');

// // Get the value property of the input element

//   var inputValue = inputElement.property('value');

//   console.log(inputValue);
//   console.log(people);

//  // Use the form input to filter the data by blood type

//   var filteredData = people.filter(person => person.datetime === inputValue);

//   console.log(filteredData);


 
//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values

//   var dates = filteredData.map(person => person.datetime);
//   console.log(dates)


// var submit = ufoData = d3.select('#filter-btn');

// submit.on('click', function() {
//     d3.event.preventDefault();

//     var inputElement = d3.select('#datetime');

//     var inputValue = inputElement.property('value');

//     console.log(inputValue);
//     console.log(ufoData);

//     var filteredSightings = ufoData.filter(ufo => ufoData.datetime === inputValue);

//     console.log(filteredSightings)


// });