
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", fetchStat);
const ghibliVehicles = document.querySelector("ul");
const section = document.querySelector('section');




function fetchStat(e){
  e.preventDefault();
 
fetch(
    "https://ghibliapi.herokuapp.com/vehicles"
  )
   .then (res => res.json())
   .then(json=>
  displayRandomVehicles(json))


while (section.firstChild) { 
  section.removeChild(section.firstChild);
}
function displayRandomVehicles(randomVehicle){
  let vehicleNames= [];
    randomVehicle.map(v => {
      vehicleNames.push(v.name +": "+ v.description)
    })
    
    let vehicle = document.createElement('p');
    vehicle.innerText = `${vehicleNames[Math.floor(Math.random() * 3)]}`; 
    section.appendChild(vehicle);
  }
}


