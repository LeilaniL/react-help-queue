import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import Error404 from "./Error404";
import Admin from "./Admin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(
      this
    );
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(
      this
    );
  }
  updateTicketElapsedWaitTime() {
    console.log("check");
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach(
      ticket => (ticket.formattedWaitTime = ticket.timeOpen.fromNow(true))
    );
    this.setState({ masterTicketList: newMasterTicketList });
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(
      () => this.updateTicketElapsedWaitTime(),
      60000
    );
  }
  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }
  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = newTicket.timeOpen.fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({ masterTicketList: newMasterTicketList });
  }
  handleChangingSelectedTicket(ticket) {
    this.setState({ selectedTicket: ticket });
    // TODO figure out why selected ticket is not updating immediately, left off at Mutating State Slices - Rendering Ticket Details
    // setTimeout(() => {
    //   alert(
    //     "The selected ticket is now: " +
    //       this.state.selectedTicket.names +
    //       ticket.names
    //   );
    // }, 50);
  }
  // componentDidUpdate() {
  //   alert("The selected ticket is now: " + this.state.selectedTicket.names);
  // }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TicketList ticketList={this.state.masterTicketList} />
            )}
          />
          <Route
            path="/newticket"
            render={() => (
              <NewTicketControl
                onNewTicketCreation={this.handleAddingNewTicketToList}
              />
            )}
          />
          <Route
            path="/admin"
            render={props => (
              <Admin
                ticketList={this.state.masterTicketList}
                currentRouterPath={props.location.pathname}
                onTicketSelection={this.handleChangingSelectedTicket}
              />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
