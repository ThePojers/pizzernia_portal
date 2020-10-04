import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (

  <div className={styles.component}>
    <h2>
      Tables View
    </h2>
    <Link to="tables/booking/new">
      <h2>Table new 
      </h2>
    </Link>
    <Link to="tables/booking/table/1">
      <h2>Booking exist
      </h2>
    </Link>
    <Link to="tables/events/new">
      <h2>Events new 
      </h2>
    </Link>
    <Link to="tables/ecents/event/1">
      <h2>event exist
      </h2>
    </Link>
  </div>

);

export default Tables;
