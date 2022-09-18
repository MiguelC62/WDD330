const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week2 notes",
    url: "week2/index.html"
  },
];
  
    
links.forEach(listlinks);
   
   
    function listlinks() {
  
      // Create elements to add to the document
      let li = document.createElement('li');
      let a = document.createElement("a");       
      
      var linkText = document.createTextNode(`${links.label}`);
      li.appendChild(linkText);
      a.textContent = `${links.label}`;
      a.href = links.url;
     
      // Add/append the section(card) with the element
      
      li.appendChild(a);
      
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('ol.weeks').appendChild(li);

        
      }
      