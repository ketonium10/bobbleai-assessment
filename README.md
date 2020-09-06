This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


### `Steps to execute the program`

Clone the repository
After cloning open the terminal and type npm run start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `Execution of the project`

This project shows a sign up page with the facility of logging in 
using Goggle and Facebook login, along with that if the user wants to register himself
he can do that by completing the form below.

For Google and Facebook login, firebase is used. In the Firebase I have added the facility
of Facebook login by making an app on developer.facebook.com as bobble-assessment and integrating 
it to firebase.

FireBase is connected to this project by installing the dependencies of firebase from npm and initialising
it by sending the API key and API domain, although these should be kept confidential for production. As this was for exam/development purpose I have made it public. 

For the form API call is being made to regres.in/api/register. Where you can register yourself by adding your
firstname, last name, email and password. Although the API calls sends STATUS:200 only for emails already 
present in the database, ELSE sends a STATUS:400. 

The UI of this application is made on ReactJs using bootstrap styling.
As I believe bootstrap is tested and already used in big scale, which saves time of developers who are 
learning