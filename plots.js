// An array of each country's numbers
let australia = Object.values(data.australia);
let brazil = Object.values(data.brazil);
let uk = Object.values(data.uk);
let mexico = Object.values(data.mexico);
let singapore = Object.values(data.singapore);
let southAfrica = Object.values(data.southAfrica);

// Create an array of category labels
let labels = Object.keys(data.australia);

// @ADD YOUR CODE HERE

function init() {
    var dataPlot = [{
        values: australia,
        labels: labels,
        type: 'pie'
    }];
      
    var layout = {
        height: 400,
        width: 500
    };
      
    Plotly.newPlot('pie', dataPlot, layout)
};

function updatePlot() {
    let dropdownMenu = d3.select("#selDataset");
    let datasetName = dropdownMenu.property("value");

    let x = [];
    let y = labels;

    if (datasetName == 'australia') {
        x = australia;
    }
    else if (datasetName == 'brazil') {
        x = brazil;
    }
    else if (datasetName == 'uk') {
        x = uk;
    }
    else if (datasetName == 'mexico') {
        x = mexico;
    }
    else if (datasetName == 'singapore') {
        x = singapore;
    }
    else if (datasetName == 'southAfrica') {
        x = southAfrica;
    }

    Plotly.restyle("pie", "values", [x]);
}

let myDropDown = d3.select("#selDataset")
myDropDown.on("click", updatePlot);

init();

console.log(x)


