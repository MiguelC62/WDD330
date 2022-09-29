const links = [
  {
    label: "Week1",
    url: "week1/index.html"
  },
  {
    label: "Week2",
    url: "week2/index.html"
  },
  {
    label: "Week3",
    url: "week3/index.html"
  }
  
];
  
    
links.forEach(listLinks);
   
   
  function listLinks(week) {

    // Create elements to add to the document
    let ol = document.querySelector('ol.weeks')
    let li = document.createElement('li');
    let a = document.createElement("a");       
    
    var linkText = document.createTextNode(week.label);
    li.appendChild(linkText);
    a.href = week.url;
    
    // Add/append the section(card) with the element
    
    ol.appendChild(li);
    ol.appendChild(a);

    }
      