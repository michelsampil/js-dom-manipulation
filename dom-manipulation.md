# Dom manipulation

In JS we can manipulate the dom in order to remove, add, modify elements, nodes and styles and also add some additional behaviors to our website.

## Selecting Elements

JavaScript provides several methods to select elements from the DOM:

- document.getElementById(id): Selects an element by its ID.

- document.getElementsByClassName(className): Selects elements by their class name.

- document.getElementsByTagName(tagName): Selects elements by their tag name.

- document.querySelector(selector): Selects the first element that matches a CSS selector.

- document.querySelectorAll(selector): Selects all elements that match a CSS selector.

<script>
    // ➕ specific
    const elementById = document.getElementById('app');
    const elementsByClassName = document.getElementsByClassName('static-element');
    const elementsByTagName = document.getElementsByTagName('h2');
    const elementByQuerySelector = document.querySelector('#app h1');
    const elementsByQuerySelectorAll = document.querySelectorAll('.static-element');
    // ➖ specific
</script>

## Creating and Appending Elements

In JavaScript, you can create new DOM elements using the document.createElement method. This method allows you to create an element node of the specified type. Once the element is created, you can modify its properties, such as textContent, id, className, etc. To insert the newly created element into the DOM, you can use methods like appendChild, which appends a node as the last child of a specified parent node.

<script>
    const app = document.getElementById('app');
    const title = document.createElement('h1');
    title.textContent = 'DOM Manipulation Demo';
    app.appendChild(title);
</script>

In this example, a new <h1> element is created, its text content is set, and it is appended to the #app element.

## Attaching Event Listeners

Event listeners allow you to make your web page interactive by responding to user actions. You can attach an event listener to an element using the addEventListener method, which takes the event type (like 'click') and a callback function that gets executed when the event occurs.

<script>
    const addButton = document.createElement('button');
    addButton.textContent = 'Add New Element';
    app.appendChild(addButton);

    addButton.addEventListener('click', () => {
        const newElement = document.createElement('div');
        newElement.textContent = 'This is a new element added to the DOM.';
        newElement.classList.add('new-element');
        app.appendChild(newElement);
    });    
</script>

Here, a button is created and appended to the DOM. An event listener is added to the button, which creates and appends a new <div> element to the DOM when the button is clicked.

## Iterating Over HTMLCollections

HTMLCollections, such as those returned by getElementsByClassName or getElementsByTagName, can be converted into arrays using the spread syntax ([...]). This allows you to use array methods like forEach to iterate over them.

<script>
    const staticElements = document.getElementsByClassName('static-element');
    [...staticElements].forEach((element, index) => {
        element.textContent += ` - Modified by JavaScript (${index + 1})`;
        element.classList.add('highlight');
    });
</script>

## Modifying Styles of Elements

You can dynamically change the styles of elements using JavaScript by modifying their style property or by adding/removing CSS classes. This is useful for highlighting elements or changing their appearance based on user interactions.

<script>
    const staticElements = document.getElementsByClassName('static-element');
    [...staticElements].forEach((element, index) => {
        element.textContent += ` - Modified by JavaScript (${index + 1})`;
        element.classList.add('highlight');
    });
</script>

In this example, elements with the class name static-element are selected, iterated over, and their text content is modified. A CSS class highlight is also added to each element to change its style.

# Removing Elements from the DOM

Removing elements from the DOM can be done using the removeChild method or the remove method. This is useful for dynamically updating the content of the page.

<script>
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Static Content';
    app.appendChild(removeButton);

    removeButton.addEventListener('click', () => {
    const staticElements = document.getElementsByClassName('static-element');
    while (staticElements.length > 0) {
        staticElements[0].parentNode.removeChild(staticElements[0]);
    }
    });
</script>

A button is created and appended to the DOM. When this button is clicked, it removes all elements with the class name static-element from the DOM.

## Using Template Literals to Create HTML Content

Template literals, enclosed by backticks (`), allow you to create multi-line strings and embed expressions within them. They can be used to generate HTML content dynamically and insert it into the DOM using methods like insertAdjacentHTML.

<script>
    const templateButton = document.createElement('button');
    templateButton.textContent = 'Add Template Element';
    app.appendChild(templateButton);

    templateButton.addEventListener('click', () => {
    const templateContent = `
        <div class="template-element">
            <h2>Template Element</h2>
            <p>This element was created using a template literal.</p>
        </div>
    `;
    app.insertAdjacentHTML('beforeend', templateContent);
    });
</script>

Here, a button is created and appended to the DOM. When clicked, it uses a template literal to create HTML content, which is then inserted into the DOM using insertAdjacentHTML.
