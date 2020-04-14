// from data.js
var ufoData = data;


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

}


//for looping through inputs on change
var inputs = ['datetime', 'state', 'city', 'comments'];
var submit = d3.select('#filter-btn');

var filter = d3.selectAll(".filter");

filter.on('change', function() { 

    // d3.event.preventDefault();
    tbody.html("");
    var filteredData = ufoData;
    for(var input of inputs){
        var inputElement = d3.select('#'+input);
        var inputValue = inputElement.property('value');
        console.log(inputValue);

        filteredData = filteredData.filter(function(entry){

            return entry[input].toLowerCase().includes(inputValue.toLowerCase());

        });
    }

    //66k lines, too much to show limited to 200
    filteredData.slice(0, 200).forEach(write_row);
});

