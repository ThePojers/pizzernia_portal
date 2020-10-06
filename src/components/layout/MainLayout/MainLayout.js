import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const MainLayout = (props) => (
  <div>
    <AppBar>
      <Container>
        <Toolbar disableGutters>
          <PageNav></PageNav>
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth='lg'>
      <Toolbar />
      {props.children}
    </Container>
  </div>

);

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;
