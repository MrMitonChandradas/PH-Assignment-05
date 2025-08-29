## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Answer:

## getElementById: getElementById is a DOM method in JavaScript that finds an element with a specific id in a page. If no html element is found, null is returned. In this case, only the id selector is used. In this case, each id must be unique.

## getElementsByClassName: getElementsByClassName is a JavaScript DOM cmKe. With getElementsByClassName you can get one or more html collections together. In this case, a common class name is used everywhere. It changes automatically when the DOM changes. It is not an array, but an array-like.

## querySelector: querySelector is a JavaScript DOM method that helps find the first element on a page using a CSS selector. It returns null if the first matching element is not found. It also changes if the DOM changes. It always returns the first matching element.

## querySelectorAll: querySelectorAll is a JavaScript DOM method that finds all matching elements on a page using CSS selectors. In this case, any CSS selector can be used. In the case of querySelectorAll, the NodeList is not updated even if the DOM changes.

## 2. How do you create and insert a new element into the DOM?

<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Element Create</title>
</head>
<body>

  <div id="container">
    <p>I am a Paragraph.</p>
  </div>

  <script>
    
    const newDiv = document.createElement("div");
    
    newDiv.textContent = "I am a New Paragraph.";
   
    newDiv.id = "myNewDiv";
  
    const container = document.getElementById("container");
    container.appendChild(newDiv); 

  </script>

</body>
</html>
