# Help Queue Project v1: React Without create-react-app
### _Revisiting an ancient project to help students learn React_

### Notes 
- We'd normally need an index.html file to have our root node that React renders everything to. (The rendering function in index.js looks like this: ReactDOM.render(_myElementToRender, myTargetNodeToRenderTo_)) But this project doesn't have any HTML files because a templating library called EJS was used: see template.ejs file.
- Instead of using the `.jsx` file extension now we usually just use regular `.js`
- The Error component gets rendered whenever someone tries to visit a route that doesn't exist (or rather, one that react-router doesn't recognize): see App.jsx and check out react-router's Switch component being used, with the Error component as the default when no other case matches

### Known Bugs & Needed Improvements
- Selecting a ticket to show details is not finished
- Lots of console logs left in
- Do we really need two stateful, container components? (App and NewTicketControl)
- No styling
- `div`s could be replaced with `React.Fragment` or `<>`

### Tech Used 
- React
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