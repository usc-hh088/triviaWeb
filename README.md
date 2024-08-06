[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/dwmllbUq)
# CSC301-2024-Assignment1
CSC301 2024 Assignment 1 - Front-end development

## Task description
You have been asked to develop a trivia web application with the following components:
- A home page that allows the participant to enter a name
- The trivia page needs to display each question (one at a time) and their options. The participant needs to select an answer before proceeding to the next question. 
- This page must have a timer that will start as soon as the trivia page is loaded and will stop as soon as the last question has been answered
- The final page needs to display the name of the participant, their score and the total time taken.

### Technical requirements
- You must develop this web application using HTML, CSS and Javascript
- You must use a bundler (parcel, webpack, esbuild)
- You must style the page however it does not need to be a visual masterpice.
- Using a CSS framework is optional (e.g., bootstrap, tailwind, etc.)
- You must get your questions from the endpoint provided by the nodejs server supplied within this repo: more detail below.
- You must update `README.md` with documentation about your app eg. how to run your app.


## Quiz API

    NOTE: You will not be graded on any work done to the server. This is only a utility to provide an endpoint to retrive data from.

In a new terminal window, navigate to the server folder in this project and run:
```javascript
npm install // to install all dependencies for the server
npm start // starts the mocking server
```

You should then see a message like this
```shell
> mockserver@1.0.0 start
> node src/main.js

Mock server is listening at http://localhost:3055 or http://127.0.0.1:3055
```

### API endpoint  
```
GET http://127.0.0.1:3055/quiz
```  

This endpoint accepts two query parameters  

`theme` (required) - value can be either `dev` or `cars`
each will provide a different set of json

`limit` (optional) - value can be an integer. Adds a cap to the amount of results returned by the API.

Note: If you're having any issues with the server, please post the issue you're having in the Canvas discussion boards.

### How to play
To start the quiz, enter a username and click on "Start Quiz". If no input is provided, an alert window will pop up. You can select an option by clicking on the small circle next to it. Once you submit your answers, they cannot be reviewed or modified. The timer at the top of the page displays the elapsed time. You must answer all questions and submit them to proceed to the next one. Your score and the time taken will be displayed after you have answered all questions. Each correct answer earns one point and the total score is out of fifteen points.

