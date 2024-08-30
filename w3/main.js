let carbonFootprintPoints = 0;
//const numberInHousehould = 3;

function determineHouseHoldpts(numberInHousehould) {
    console.log("inside the function");
    if (numberInHousehould === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehould === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehould === 3)
        carbonFootprintPoints = carbonFootprintPoints + 10;
    else if (numberInHousehould === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (carbonFootprintPoints === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehould === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehould > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
     console.log(`based on the number of the household of ${numberInHousehould} the points would be ${carbonFootprintPoints}.`)
}




// global scope

determineHouseHoldpts(3)
determineHouseHoldpts(4)
