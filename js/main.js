const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week2 notes",
    url: "week2/index.html"
  },
  {
    label: "Week3 notes",
    url: "week3/index.html"
  }
];
  
    
links.forEach(listlinks);
   
   
function listlinks() {

  // Create elements to add to the document
  let ol = document.querySelector('ol.weeks')
  let li = document.createElement('li');
  let a = document.createElement("a");       
  
  var linkText = document.createTextNode(label);
  a.appendChild(linkText);
  a.href = url;
  
  // Add/append the section(card) with the element
  
  li.appendChild(a);
  
  ol.appendChild(li);

  }
      