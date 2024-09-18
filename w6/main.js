const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = []

function determineHouseSizePts(size) {
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
   
    return houseHoldPoints
}
     
function start(houseHoldMembers, houseSize) {
    const householdPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = householdPTS + houseSizePTS;

    cfpData.push({
        houseMembers: houseHoldMembers,
        houseS: houseSize,
        houseMembersPTs: householdPTS,
        houseSPTS: houseSizePTS,
        cfpTotal: total
    } );
}


function displayoutput(firstname, lastname) {
    for (obj of cfpData) {

        const newH2 = document.createElement("h2");
        newH2.textContent = `carbon FootPrint ${obj.cfpTotal}`;
        const newH3 = document.createElement("h3");
        newH3.textContent = `based on number in and size of home`
        const newP = document.createElement("p");
        newP.textContent = `this number is based on the number of people in the house of ${obj.houseHoldMembers} (score ${obj.houseHoldPTS}).`;
        newP.textContent += `and a ${obj.houseSize} size of home (score:${obj.housesizePoints}).`;
        OUTPUT.appendChild(newH2);
        OUTPUT.appendChild(newH3);
        OUTPUT.appendChild(newP);
    }
 }
//start(5, "apt");
//start(4, "large");
//start(3, "medium");
//start(2, "small");




FORM.addEventListener("submit", function (e) {
    e.preventDefault();
    //console.log("I am inside the callback function");
   // console.log(e);
   const firstName = FORM.firstname.value;
   const lastName = FORM.lastname.value;
   const houseMembers = parseInt(FORM.housem.value);
   const houseSize = FORM.houses.value;
   start(houseMembers, houseSize);
   OUTPUT.innerHTML = "";
   displayoutput(firstname, lastname);
   FORM.reset();
})

// the event listener is waiting or "listening" to the submmit button. As soon as the submit button is clicked it runs the code or function
// i think so beccause it listens for the submit first then runs the code
// becacuse when we run the code it goes back to the html
// we abbreviated apartment
//we dont know if the user will give us good data