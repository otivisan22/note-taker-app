# note-taker-app

## Click [here] (https://afternoon-thicket-01555.herokuapp.com) to see the deployment of the app on heroku

## Description

Our task was to modify starter code in order to create an application called Note Taker that can be used to write, save and delete notes. The application's front end was already created, our job was to build the back end and to blend both together, and at the end to deploy our app to Heroku.
This application will use an Express.js back end and will save and retrieve data from a JSON file.
As a future improvement for this app I will add an option of edit notes as well. Stay tuned.

## Requirements

For development, you will only need Node.js and a node global package installed in your environment

## Getting started

    $ git clone https://github.com/otivisan22/NOTE-TAKER-APP
    $ cd NOTE-TAKER-APP
    $ npm i

## What did we do?

- Install npm i
- Install npm i express
- npm i --save-dev nodemon
- npm i cors
- npm i uuid
- Developed from scratch the bak end of this by using Express.js
- By using express routing (get, post and delete) we have write, save and delete notes
- Also we have imported uuid package in order to save data in JSON file with an unique ID
- The application can write, save and delete notes
- For future challenges this application wil be able to edit notes as well

## Running the project

    $ npm run start

    The application will invite to follow the link on the local host.

## Testing

For future challenges this application will have also include test, even while developing we have performed test while adding, saving and deleting notes.
