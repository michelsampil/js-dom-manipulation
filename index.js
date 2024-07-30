document.addEventListener("DOMContentLoaded", () => {
  // Creating and appending initial elements
  const app = document.getElementById("app");

  const title = document.createElement("h1");
  title.textContent = "DOM Manipulation Demo";
  app.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "This is a demonstration of various DOM manipulation techniques using JavaScript.";
  app.appendChild(description);

  // Adding a button to create a new element
  const addButton = document.createElement("button");
  addButton.textContent = "Add New Element";
  app.appendChild(addButton);

  // Function to create a new element with an event listener
  const createNewElement = () => {
    const newElement = document.createElement("div");
    newElement.textContent = "This is a new element added to the DOM.";
    newElement.classList.add("new-element");

    // Adding event listener directly to the new element
    newElement.addEventListener("click", () => {
      newElement.style.backgroundColor = "#cfe2f3";
    });

    app.appendChild(newElement);
  };

  addButton.addEventListener("click", createNewElement);

  // Using template literals to create HTML content
  const templateButton = document.createElement("button");
  templateButton.textContent = "Add Template Element";
  app.appendChild(templateButton);

  templateButton.addEventListener("click", () => {
    const templateContent = document.createElement("div");
    templateContent.innerHTML = `
              <div class="template-element">
                  <h2>Template Element</h2>
                  <p>This element was created using a template literal.</p>
              </div>
          `;

    // Get the actual template element
    const templateElement = templateContent.querySelector(".template-element");

    // Adding event listener directly to the template element
    templateElement.addEventListener("click", (e) => {
      templateElement.style.backgroundColor = "violet";
    });

    app.appendChild(templateElement);
  });

  // Selecting elements by class and modifying them
  const staticElements = document.getElementsByClassName("static-element");
  [...staticElements].forEach((element, index) => {
    element.textContent += ` - Modified by JavaScript (${index + 1})`;
    element.classList.add("highlight");
  });

  // Removing static content
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Static Content";
  app.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    const staticElements = document.getElementsByClassName("static-element");
    while (staticElements.length > 0) {
      staticElements[0].parentNode.removeChild(staticElements[0]);
    }
  });
});
