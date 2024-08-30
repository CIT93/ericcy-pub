let houseHoldSize = 0;
let mediumSize = 7;
let smallSize = 4;
let aparmentH = 2;
const houseSize = "large";
const medHouseSize = "medium"
const smaHouseSize = "small"
const apHouse = "apartment"


function determineHouseSize(houseSize){
    
   
    console.log("houseSizes");

    if (houseSize === "large") {
        houseHoldSize = houseHoldSize + 10;
    } else if (houseHoldSize === "medium") {
        mediumSize = mediumSize + 7;
    } else if (smallSize === "small") {
        smaHouseSize = smaHouseSize + 4;
    } else if (aparmentH === "apartment") {
        apHouse = apHouse+ 2;
    }
    console.log(`based on the housesize ${houseSize} the points would be ${houseHoldSize}.`)
    console.log(`based on the householdsize ${medHouseSize} the points would be ${mediumSize}`)
    console.log(`based on the householdsize ${smaHouseSize} the points would be ${smallSize}`)
    console.log(`based on the householdsize ${apHouse} the points would be ${aparmentH}`)
}

determineHouseSize("large")
