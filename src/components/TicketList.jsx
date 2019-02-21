import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";

function TicketList(props) {
  console.log(
    "I am TicketList and I know my route: " + props.currentRouterPath
  );
  return (
    <div>
      <hr />
      {props.ticketList.map(ticket => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticket.id}
          onTicketSelection={props.onTicketSelection}
        />
      ))}
    </div>
  );
}
TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};
export default TicketList;
