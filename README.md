# Week-5-Assignment
YouThrive Backend JavaScript Week 5 Assignment

**Setting Up a Node.js Server**

  1. Install Node.js:
  
  Head to the official Node.js website and download the installer for your operating system.
  Run the installer and follow the on-screen instructions. 
  This will install both Node.js and npm (Node Package Manager), a tool for managing project dependencies.
  
  2. Initialize a New Project:
  
  Open your terminal and navigate to your desired project directory.
  Run the command npm init in the terminal. This will initialize a new project and create a package.json file that stores project metadata and dependencies.
  
  3. Install Packages using Express
  
  In your terminal, navigate to your project directory.
  Run the command npm install express to install the Express framework. This will add Express as a dependency in your package.json file.
  
  4. Create a Server File:
  
  Create a new JavaScript file (e.g., server.js) in your project directory.
  This file will contain the code for your server.
  
  5. Write Server Code with Express:
      (see code in server.js)



**Purpose of Express:**

  Express provides a structured way to build web applications and APIs. Here's why it is very useful:
  1. It simplifies defining routes (URLs) that map to specific functionality in your server code.
  2. It allows you to add functionalities like logging, authentication, and request parsing before reaching your route handlers.
  3. It offers ways to generate dynamic HTML content for your web application.



**What is Nodemon?**

  Nodemon is a utility that acts as a wrapper around the Node.js runtime (node) command.
  It monitors your project directory for file changes and automatically restarts your Node.js application when it detects any modifications.

**Significance of nodemon in Node.js:**

  Without nodemon, when you make changes to your Node.js code, you typically need to:

  1. Save the changes in your code editor.
  2. Manually stop the running server process (using Ctrl+C or similar).
  3. Restart the server by running the node command again with your application file.
     
  This repetitive cycle can slow down development. Nodemon automates this process:
  1. You make changes to your code.
  2. Nodemon detects the changes.
  3. Nodemon automatically stops the running server.
  4. Nodemon restarts your server with the updated code.

  This significantly improves your development experience by:
  1. Faster Development Cycle: You can see the changes reflected almost instantly without manually restarting the server.
  2. Increased Productivity: Less time is spent on repetitive tasks, allowing you to focus on writing code.
  3. Better Debugging Experience: Changes take effect immediately, making it easier to identify and fix bugs.

