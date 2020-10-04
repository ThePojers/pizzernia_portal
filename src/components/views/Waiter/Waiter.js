import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => (

  <div className={styles.component}>
    <h2>
      Waiters View
    </h2>
    <Link to="waiter/orders/new">
      <h2>Waiter new 
      </h2>
    </Link>
    <Link to="waiter/orders/order/1">
      <h2>Waiter exist
      </h2>
    </Link>
  </div>

);

export default Waiter;
