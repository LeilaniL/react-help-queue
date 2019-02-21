import React from 'react';
import PropTypes from 'prop-types';

function Admin() {
    return (
        <div>
            <TicketList ticketList={props.ticketList} />
        </div>
    );
}

Admin.propTypes = {
    ticketList: PropTypes.array
}
export default Admin;