import React from 'react';
import styles from './WaiterOrderId.module.scss';
import {useParams} from 'react-router-dom';

const WaiterOrderId = () => (

  <div className={styles.component}>
    <h2>
    Id:
      {useParams().id}
    </h2>
  </div>

);

export default WaiterOrderId;
