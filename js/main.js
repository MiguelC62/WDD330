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
   
   
    function listlinks(week) {
  
      // Create elements to add to the document
      let list = document.createElement('li');
      let p1 = document.createElement("a");       
      
      p1.title = links.label;
      p1.href = links.url;
  
      // Add/append the section(card) with the element
      
      list.appendChild(p1);
      
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('ol.weeks').appendChild(list);
        
      }
      