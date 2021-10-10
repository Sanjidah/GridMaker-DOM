let numRows = 1;
let numCols = 1;
let colorSelected; 
let gridTable = document.getElementById("grid"); // Select section with an id of grid


//Add a row
function addR() {
    let row = document.createElement("tr"); // Create a new row element
    for (i = 0; i < numCols; i++){
        let rowCell = document.createElement("td"); // Create a new rowCell element
        row.appendChild(rowCell); // Append new rowCell element to last row element
    }
    gridTable.appendChild(row); // Append row to grid table
    numRows++; // Increment number of rows
   //alert("Clicked Add Row")
}

//Add a column
function addC() {
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}