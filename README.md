This project is developed for Assessment of Bobble.ai.<br/>

It is a Sign-Up page made using React.JS and Firebase. <br/>

It has the features of logging in using Google and Facebook signin.<br/>

Along with that offers the user to Register through API call to https://reqres.in

### `Steps to execute the program`

Clone the repository<br />
After cloning open the terminal type<br />
### `npm install `
(This will install all the dependencies used for the project)<br />
then type<br />
### `npm run start `

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Execution of the project`

This project shows a sign up page with the facility of logging in <br />
using Goggle and Facebook login, along with that if the user wants to register himself<br />
he can do that by completing the form below.<br />

For Google and Facebook login, firebase is used. In the Firebase I have added the facility<br />
of Facebook login by making an app on developer.facebook.com as bobble-assessment and integrating<br /> 
it to firebase.

FireBase is connected to this project by installing the dependencies of firebase from npm and initialising<br />
it by sending the API key and API domain, although these should be kept confidential for production.<br />
 As this was for exam/development purpose I have made it public. 

For the form API call is being made to regres.in/api/register. Where you can register yourself by adding your<br />
firstname, last name, email and password. Although the API calls sends STATUS:200 only for emails already <br />
present in the database, ELSE sends a STATUS:400. 

The UI of this application is made on ReactJs using bootstrap styling.<br />
As I believe bootstrap is tested and already used in big scale, which saves time of developers who are 
learning.
