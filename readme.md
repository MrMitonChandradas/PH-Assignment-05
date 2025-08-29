## Question-1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Answer:

## getElementById:

             getElementById is a DOM method in JavaScript that finds an element with a specific id in a page. If no html element is found, null is returned. In this case, only the id selector is used. In this case, each id must be unique.

## getElementsByClassName:

            getElementsByClassName is a JavaScript DOM cmKe. With getElementsByClassName you can get one or more html collections together. In this case, a common class name is used everywhere. It changes automatically when the DOM changes. It is not an array, but an array-like.

## querySelector:

            querySelector is a JavaScript DOM method that helps find the first element on a page using a CSS selector. It returns null if the first matching element is not found. It also changes if the DOM changes. It always returns the first matching element.

## querySelectorAll:

            querySelectorAll is a JavaScript DOM method that finds all matching elements on a page using CSS selectors. In this case, any CSS selector can be used. In the case of querySelectorAll, the NodeList is not updated even if the DOM changes.

## Question-2. How do you create and insert a new element into the DOM?

## Answer:

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

## Question-3. What is Event Bubbling and how does it work?

## Answer:

        Event Bubbling is when a small element (such as a button) is clicked, the event starts from that element and gradually rises towards its parent or larger element. In the case of Event Bubbling, the childNode moves closer to its parentNode. The process is completed step by step. First, the small element moves closer to it, then the larger element. At each step, the event moves closer to its parent element. Event Bubbling can be stopped using ‍stopPropagation().

## Question-4. What is Event Delegation in JavaScript? Why is it useful?

## Answer:

        Event Delegation is a JavaScript technique where we place a single event listener on the parent element instead of the child elements. Then the parent element handles the events of the child elements through the event. In a single instance, the parent element can understand the actions of the child element through the parent element. When an event occurs on the child element, the parent element can understand it. The benefit of this is that in this case, the code needs to be reduced. The codes are clear and the user can easily understand. Adding a new child element to the DOM does not require a new listener. There is no need to use many event listeners. The task can be done easily.

## Question-5. What is the difference between preventDefault() and stopPropagation() methods?

## preventDefault():

        preventDefault() is a JavaScript method. Through it, browser action can be stopped. By clicking on a link, navigation to that page can be stopped through preventDefault(). If preventDefault() is used in a form, then the page will be stopped from reloading.

## stopPropagation():

        stopPropagation() is a JavaScript method that prevents events from bubbling up to the parent element. It is used to prevent or stop bubbling from a child element to the parent element.
