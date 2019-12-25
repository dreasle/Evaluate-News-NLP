# Project: Evaluate a News Article with Natural Language Processing

## Table of Contents

* [Overview](#overview)
* [Project Environment Setup](#project)
* [APIs and Routes](#api)
* [Tasks](#tasks)

## Project Environment Setup

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## APIs

The Aylien API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Setting up the API

The Aylien API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

### Aylien endpoints

[here](https://docs.aylien.com/textapi/endpoints/#api-endpoints).

## Aylien processing

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements.
- Go back to the web pack config and add the setup for service workers.
- Test that the site is now available even when you stop your local server

## Tasks

- [x] Be set up with Webpack, Express, Node, and Sass, and Service Workers

- [x] Have separate dev and prod configurations for Webpack

- [x] Have the developer environment set up with the Webpack dev server

- [ ] Have a minimum of one form field

- [ ] Make one request to the Aylien API

- [ ] Use Sass for styling

- [ ] Minify js and styles in the production environment

- [ ] Response from the API must be added to the view for a user to see 

- [x] Be able to show content offline

- [ ] Parse the response body to dynamically fill content on the page.

- [ ] Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements.  You should add Jest to your project to handle testing as well.

- [ ] Go back to the web pack config and add the setup for service workers.

- [ ] Test that the site is now available even when you stop your local server

- [ ] Readme file updated with non-default text

- [ ] the git ignore file must contain both the node_modules and dist folders at minimum. Other files can be included.

- [ ] There will be a minimum of 2 javascript files in the src/js folder. All files in the js folder must be found by webpack.

- [ ] Check that the project has Jest installed, that there is an npm script to run Jest, and that the tests all pass. Every src/js file should have at least one test.

- [ ] A single field form that uses the correct html tags and structure. There should be some attempt to validate the form input. Bonus points if you use regex to correctly check for a URL and give back helpful error messages.

- [ ] Set up env variables for ports in package.json call and webpack

