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
     


function displayOutObj(obj) {
    console.log(obj)
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `carbon FootPrint ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `based on number in and size of home`
    const newP = document.createElement("p");
    newP.textContent = `this number is based on the number of people in the house of ${obj.cfpTotal}.`;

    output.appendChild(newH3);
    output.appendChild(newH2);

}

function start(houseHoldMembers, houseSize) {
    const householdPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = householdPTS + houseSizePTS;
    const cfpObj = {
        houseMembers: houseHoldMembers,
        houseS: houseSize,
        houseMembersPTs: householdPTS,
        houseSPTS: houseSizePTS,
        cfpTotal: total
    }
    displayOutObj(cfpObj);

}



   // console.log(`total carbon footprint score so far ${total}`)
 //}

//last code along for week 4- i think it does because it helps to run it correctly

 //const myInputs = [5, "apt"]; // on the global scope
 
 //function displayOutput(){
   // for (arr of cfpData){
        //console.log(arr)
        //const output = document.getElementById("output");
        //const newP1 = document.createElement("P")
        //const newP2 = document.createElement("P")
       // const newP3 = document.createElement("P")
        //const newP4 = document.createElement("P")
       // const newP5 = document.createElement("P")
       // const newP6 = document.createElement("P")
        //newP1.textContent = `Carbon Footprint total is ${arr[4]}`;
       // newP2.textContent = `number of household members is ${arr[2]}`
       // newP3.textContent =  `the score of house members is ${arr[2]}}`
       // newP4.textContent =  `the size of house is ${arr[1]}`
       // newP5.textContent =  `score of the house is ${arr[3]}`

     //output.appendChild(newP1);
     //output.appendChild(newP2);
     //output.appendChild(newP3);
    // output.appendChild(newP4);
     //output.appendChild(newP5);
   // }
// }

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");
start(2, "apt")


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





 //function displayoutput() {
   // for (arr of cfpData) {
      //  const output = document.getElementById("output");
       // const newH2 = document.createElement("h2");
       // newH2.textContent = `carbon FootPrint ${arr[4]}`;
        //const newH3 = document.createElement("h3");
       // newH3.textContent = `based on number in and size of home`
       // const newP = document.createElement("p");
       // newP.textContent = `this number is based on the number of people in the house of ${arr[2]}.`;
       // newP.textContent += `and a ${arr[1]} size of home (score:${arr[2]}).`;
       // output.appendChild(newH2);
       // output.appendChild(newH3);
       // output.appendChild(newP);
    //}
// }



//const cfpData = [{

//} {

//}]