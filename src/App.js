import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsId from './components/views/TablesEventsId/TablesEventsId';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';

function App() {
  return (

    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/table/:id`} component={TablesBookingId} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/event/:id`} component={TablesEventsId} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={TablesEventsNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/orders/new`} component={WaiterOrderNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/orders/order/:id`} component={WaiterOrderId} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
        </Switch>
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
