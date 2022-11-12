const superman = document.getElementById('hero');
const powers = superman.dataset.powers;
console.log(powers)
//<< 'flight superSpeed'
//localStorage.setItem('name', 'Walter White');
console.log(localStorage.getItem("name"))
localStorage.name = 'Heisenberg'; 

console.log(localStorage.name); 
//<< "Heisenberg";
localStorage.removeItem('name');