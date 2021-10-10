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
    numCols++; // Increment number of columns
    for (i = 0; i < numRows; i++) { 
        let col = document.getElementsByTagName("tr")[i]; // loop over every row
        let colCell = document.createElement("td"); // Create a new column element 
        col.appendChild(colCell); // Append the new column cell to the last col element
    }
    gridTable.appendChild(col); // Append the row with the new column cell to the table.
    // alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    gridTable.removeChild(gridTable.lastElementChild); //Removes Rows from the last added row
    numRows--; //Decrement Row Count
}

//Remove a column
function removeC() {
    numCols--; //decrement numCols
    for (j = 0; j < numRows; j++) {
        let row = document.getElementsByTagName("tr"); //gets row
        row[j].deleteCell(0); //access row and deletes the entire column
    }
    gridTable.removeChild(gridTable.lastElementChild); // Append the row with the new column cell to the table.

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