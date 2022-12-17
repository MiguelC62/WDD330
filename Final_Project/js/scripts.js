
document.getElementById('info-zero').onclick = function () {showEmergentWindow(0)};
document.getElementById('info-one').onclick = function () {showEmergentWindow(1)};
document.getElementById('info-two').onclick = function () {showEmergentWindow(2)};
document.getElementById('info-three').onclick = function () {showEmergentWindow(3)};
document.getElementById('info-four').onclick = function () {showEmergentWindow(4)};
document.getElementById('info-five').onclick = function () {showEmergentWindow(5)};
document.getElementById('info-six').onclick = function () {showEmergentWindow(6)};
document.getElementById('info-seven').onclick = function () {showEmergentWindow(7)};

let url = "https://github.com/MiguelC62/WDD330/blob/main/Final_Project/data/stadiums.json"
function showEmergentWindow(id){
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let stadium = data[id];
      //console.log(id,stadium.name);
      let element = document.getElementById("beds");
  let divEmergent = document.createElement("div");
  divEmergent.setAttribute("id", "divEmergent");
  divEmergent.setAttribute("class", "cover-emergent");
  element.appendChild(divEmergent);

  let divMessage = document.createElement("div");
  
  let name = document.createElement("p");
  let capacity = document.createElement("p");
  let location = document.createElement("p");
  let matches = document.createElement("p");
  let text = document.createElement("p");

  //let latitude = `${stadium.latitude}`;
  //let longitude = `${stadium.longitude}`;
  //console.log(latitude,longitude);
  
    
  name.textContent = `Stadium: ${stadium.name}`;   
  capacity.textContent = `Capacity: ${stadium.capacity}`;   
  location.textContent = `Location: ${stadium.location}`;
  matches.textContent = `Matches: ${stadium.matches}`;
  text.textContent = `Detail: ${stadium.text}`;   


  divMessage.appendChild(name);
  divMessage.appendChild(capacity);
  divMessage.appendChild(location);
  divMessage.appendChild(matches);
  divMessage.appendChild(text);
  divMessage.setAttribute("id", "divMessage");
  divMessage.setAttribute("class", "message-emergent");

  element.appendChild(divMessage);

  divMessage.onclick = removeCoverEmergent;

    })
    .catch(console.error);
}
//export {latitude, longitude}

function removeCoverEmergent(){
  let element = document.getElementById("beds");
  element.removeChild(document.getElementById("divEmergent"));
  element.removeChild(document.getElementById("divMessage"));
}


// retrieve data from localstorage
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

