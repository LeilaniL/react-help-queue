import React from 'react';
import PropTypes from 'prop-types';
import TicketDetail from './TicketDetail';

function Admin() {
    return (
        <div>
            <h2>Admin</h2>
            <TicketDetail />
            <TicketList
                ticketList={props.ticketList}
                currentRouterPath={props.currentRouterPath} />
        </div>
    );
}

Admin.propTypes = {
    ticketList: PropTypes.array
}
export default Admin;