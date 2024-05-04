# todolist
The to-do list project consists of three main components:

HTML Structure: Provides the layout and structure of the webpage.
CSS Styling: Styles the HTML elements to make them visually appealing.
JavaScript Functionality: Adds dynamic behavior to the webpage, allowing users to add tasks to the to-do list.
Working Model:
HTML Structure:
The HTML file (index.html) defines the basic structure of the webpage.
It contains:
A <div> element with the class "container" to hold the entire content.
An <h1> element for the title of the to-do list.
An <input> element with the ID "taskInput" for users to input their tasks.
A <button> element that triggers the addTask() function when clicked.
A <ul> element with the ID "taskList" to hold the list of tasks.
CSS Styling:
The CSS file (styles.css) provides styles to make the to-do list visually appealing.
It styles elements such as:
Setting the font family for the entire page.
Styling the container to have a border, padding, and rounded corners.
Styling the input field, button, and list items.
JavaScript Functionality:
The JavaScript file (script.js) adds interactivity to the webpage.
The addTask() function:
Retrieves the value entered by the user in the input field.
Validates the input to ensure it's not empty.
If the input is valid, creates a new list item (<li>) element.
Appends the task text as a child node to the list item.
Appends the list item to the task list (<ul>).
Clears the input field for the next task entry.
How It Works:
Open the HTML file (index.html) in a web browser.
Type a task into the input field.
Click the "Add Task" button.
The JavaScript function addTask() is triggered.
It validates the input and adds the task to the to-do list if it's not empty.
The task appears as a new list item in the to-do list.
Repeat steps 2-6 to add more tasks.
That's the basic overview and working model of the to-do list project.
