

function determineHouseSizePts(size) {
    if (size === "Large") {
        carbonFootprintspoints = carbonFootprintspoints + 10;
    } else if (size === "medium") {
        carbonFootprintspoints = carbonFootprintspoints + 7;
    } else if (size === "small") {
        carbonFootprintspoints = carbonFootprintspoints + 4;
    } else if (size === "apt") {
        carbonFootprintspoints = carbonFootprintspoints + 2;
    }
}


function determineHouseHoldPts(numberInHousehold) {
    console.log("inside the function");
    if (numberInHousehold === 1) {
        carbonFootprintspoints = carbonFootprintspoints + 14
    }else if (numberInHousehold === 2) {
        carbonFootprintspoints = carbonFootprintspoints + 12
    }else if (numberInHousehold === 3) { 
        carbonFootprintspoints = carbonFootprintspoints + 10
    }else if (numberInHousehold === 4) {
        carbonFootprintspoints = carbonFootprintspoints + 8
    }else if (numberInHousehold === 5) {
        carbonFootprintspoints = carbonFootprintspoints + 6
    }else if (numberInHousehold === 6) {
        carbonFootprintspoints = carbonFootprintspoints + 4
    }else if (numberInHousehold > 6) {
        carbonFootprintspoints = carbonFootprintspoints + 2
    }
    console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${carbonFootprintspoints}.`)
}
 let carbonFootprintspoints = 0
 

 //global scope

 determineHouseHoldPts(5);
 determineHouseSizePts("apt");



 