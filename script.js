let numRows = 1;
let numCols = 1;
let colorSelected;
let gridTable = document.getElementById("grid"); // Select section with an id of grid

//Add a row
function addR() {
  let row = document.createElement("tr"); // Create a new row element
  for (i = 0; i < numCols; i++) {
    let rowCell = document.createElement("td"); // Create a new rowCell element
    rowCell.addEventListener("click", function () {
      // Add click event listener for newly created row cell
      rowCell.style.backgroundColor = colorSelected; // Change individual row cell color to current selected color when clicked
    });
    row.appendChild(rowCell); // Append new rowCell element to last row element
  }
  gridTable.appendChild(row); // Append row to grid table
  numRows++; // Increment number of rows
}

//Add a column
function addC() {
  numCols++; // Increment number of columns
  for (i = 0; i < numRows; i++) {
    let col = document.getElementsByTagName("tr")[i]; // loop over every row
    let colCell = document.createElement("td"); // Create a new column element
    colCell.addEventListener("click", function () {
      // Add click event listener for newly created column cell
      colCell.style.backgroundColor = colorSelected; // Change individual column cell color to current selected color when clicked
    });
    col.appendChild(colCell); // Append the new column cell to the last col element
  }
  gridTable.appendChild(col); // Append the row with the new column cell to the table.
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
function selected() {
  colorSelected = document.getElementById("selectedID").value;
  console.log(colorSelected);
}

//**********************Start of Komal Kaur's Functions*****************************

//fill ALL cells with the currently selected color
function fill() {
  let row = document.getElementsByTagName("td"); //gets row 
  for(var i = 0; i < row.length; i++){
      row[i].style.backgroundColor = colorSelected;  //fills every cell with colorSelected
  }
}

//clear all cells/restore all cells to their original/initial color
function clearAll() {
  alert("Clicked Clear All");
}

//fills all UNCOLORED cells with the currently selected color
function fillU() {
  alert("Clicked Fill All Uncolored");
}

//**********************End of Komal Kaur's Functions*****************************
