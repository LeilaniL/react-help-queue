# Help Queue Project v1: React Without create-react-app
### _Revisiting an ancient project to help students learn React_

### Notes 
- We'd normally need an index.html file to have our root node that React renders everything to. (The rendering function in index.js looks like this: ReactDOM.render(_myElementToRender, myTargetNodeToRenderTo_)) But this project doesn't have any HTML files because a templating library called EJS was used: see template.ejs file.
- Instead of using the `.jsx` file extension now we usually just use regular `.js`
- JSX isn't a required part of React by the way! It's more readable, but you could just use `React.createElement()`. See the [React docs for details](https://reactjs.org/docs/react-without-jsx.html).
- The Error component gets rendered whenever someone tries to visit a route that doesn't exist (or rather, one that react-router doesn't recognize): see App.jsx and check out react-router's Switch component being used, with the Error component as the default when no other case matches

### Component Hierarchy
- App
  - Admin (lets users close tickets)
  - Error
  - TicketList
  1) Ticket
  - NewTicketControl
  1) ConfirmationQuestions (checks whether student has asked another pair first)
  2) NewTicketForm

### Setup Instructions
Make sure you have [Node](https://nodejs.org/en/download/) installed, which will include npm.
In your terminal, run these commands:
```
$ cd Desktop
$ git clone https://github.com/LeilaniL/react-help-queue.git old-help-queue
$ cd old-help-queue
$ npm i // shortcut for "install," adds the packages listed in package.json
$ npm run start // builds the project and starts a server with hot module replacement (live updates)
```
This clones the project to your Desktop into a new folder called "old-help-queue." You can change that to whatever folder name you'd prefer, or leave it out off the cloning step if "react-help-queue" won't clash with an existing folder in that location.

After running these commands, you should be able to see the project at `http://localhost:8080` in your browser.


### Known Bugs & Needed Improvements
- Selecting a ticket to show details is not finished
- Lots of console logs left in
- Do we really need two stateful, container components? (App and NewTicketControl)
- No styling
- `div`s could be replaced with `React.Fragment` or `<>`

### Tech Used 
- React
- Node Package Manager
- react-router
- Babel
- webpack
- [EJS](https://ejs.co/)
- ESLint
- uuid
- Moment.js

### License

MIT License
Copyright (c) 2021 Leilani Leach
