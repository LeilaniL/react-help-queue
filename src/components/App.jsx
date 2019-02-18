import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import NewTicketControl from './NewTicketControl';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        {/* <Route component={Error404} /> */}
      </Switch>
    </div>
  );
}

export default App;