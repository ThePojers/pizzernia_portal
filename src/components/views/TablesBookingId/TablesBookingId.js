import React from 'react';
import styles from './TablesBookingId.module.scss';
import {useParams} from 'react-router-dom';

const TablesBookingId = () => (

  <div className={styles.component}>
    <h2>
      Id:
      {useParams().id}
    </h2>
    
  </div>

);

export default TablesBookingId;
