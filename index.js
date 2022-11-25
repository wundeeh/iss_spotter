// TEMP CODE TO CHECK IF FETCHMYIP WORKS CORRECTLY
// --------------------------------------------------- 
// 
// const {fetchMyIP} = require("./iss")

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
//   console.log("-------------------------------------------------------------")
// });



// TEST CODE TO CHECK IF THE IP RETURNS CORRECT LONG AND LAT
// --------------------------------------------------------------
// 
// const {fetchCoordsByIP} = require("./iss");

// fetchCoordsByIP ("24.89.87.31", callback => {
//   // console.log(callback);
//   console.log(`Letitude: ${callback.lat} Longitude: ${callback.long}`);
//   console.log("-------------------------------------------------------------")
// }); 



// TEST CODE TO CHECK THE FLYOVER TIMES AND THE DURATION
// ----------------------------------------------------------------
// 
// const {fetchISSFlyOverTimes} = require("./iss");

// const coords = { lat: 50.4452112, long: -104.6188944 };

// fetchISSFlyOverTimes (coords, data => {

//   for (const obj of data) {
//     console.log(`Risetime: ${obj.risetime} Duration: ${obj.duration}`);
//   }
//   console.log("-----------------------------------------------------")
// })



const {nextISSTimesForMyLocation} = require('./iss');

const printNextPasses = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, nextPasses) => {
  // console.log(nextPasses)
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printNextPasses(nextPasses);
});