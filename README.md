# Help Queue Project v1: React Without create-react-app
## Revisiting an ancient project to help students learn React

### Notes 
- We'd normally need an index.html file to have our root node that React renders everything to. (The rendering function in index.js looks like this: ReactDOM.render(_myElementToRender, myTargetNodeToRenderTo_)) But this project doesn't have any HTML files because a library called Embedded JavaScript Templates was used: see template.ejs file.
- Instead of using the `.jsx` file extension now we usually just use regular `.js`
- The Error component gets rendered whenever someone tries to visit a route that doesn't exist (or rather, one that react-router doesn't recognize): see App.jsx and check out react-router's Switch component being used, with the Error component as the default when no other case matches

### Known Bugs & Needed Improvements
- Selecting a ticket to show details does not work
- Lots of console logs left in
- Do we really need two stateful, container components? (App and NewTicketControl)
