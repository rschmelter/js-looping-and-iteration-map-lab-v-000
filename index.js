// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes (drivers) {
  return drivers.map(fucntion (driver) {
    const dFirstName = driver.split(' ')[0];
    const dLastName = driver.split(' ')[1]; 

    return {firstName: dFirstName, lastName: dLastName };
    
  });
  
}
