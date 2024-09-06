const cfpData = []

function determineHouseSizePts(size) {
    console.log("inside block scope")
    let housesizePoints = 0;
    if (size === "Large") {
        housesizePoints = 10;
    } else if (size === "medium") {
        housesizePoints = 7;
    } else if (size === "small") {
        housesizePoints = 4;
    } else if (size === "apt") {
        housesizePoints = 2;
    }
    return housesizePoints
}


function determineHouseHoldPts(numberInHousehold) {
    console.log("inside block scope");
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14
    }else if (numberInHousehold === 2) {
        houseHoldPoints = 12
    }else if (numberInHousehold === 3) { 
        houseHoldPoints = 10
    }else if (numberInHousehold === 4) {
        houseHoldPoints = 8
    }else if (numberInHousehold === 5) {
        houseHoldPoints = 6
    }else if (numberInHousehold === 6) {
        houseHoldPoints = 4
    }else if (numberInHousehold > 6) {
        houseHoldPoints = 2
    }
    console.log(
        `Based on the size ${houseHoldPoints}} the points would be ${houseHoldPoints}.`
    )
    return houseHoldPoints
}
     


console.log("global scope");



function start(houseHoldMembers, houseSize) {
    const householdPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = householdPTS + houseSizePTS;
    cfpData.push([houseHoldMembers, houseSize, householdPTS, houseSizePTS, total])
    console.log(cfpData);

    console.log(`total carbon footprint score so far ${total}`)
 }

//last code along for week 4- i think it does because it helps to run it correctly

 //const myInputs = [5, "apt"]; // on the global scope
 
 function displayOutput(){
    
 }

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");
strat(1, "apt")


displayOutput()

 




 // not going to read inside the block
 // we want to minimize what is being read
 // when the file loads it sets up the functions but doesnt run them 
 

 //i think you would put the console log before
 

 //arrays

 const myArr = [1, 2, 3, 4, 5]

 console.log(myArr)
 console.log(myArr[1])
 console.log(myArr[4])
 console.log(myArr[0] = 10)
 console.log(myArr.push(1))

 // I think i need to go back and rewatch the video but i did get a good idea of it
 //