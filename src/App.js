import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Tables from './components/views/Tables/Tables';
import WaiterContainer from './components/views/Waiter/WaiterContainer';
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
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
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
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={WaiterContainer} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
