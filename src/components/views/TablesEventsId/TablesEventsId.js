import React from 'react';
import styles from './TablesEventsId.module.scss';
import {useParams} from 'react-router-dom';

const TablesEventsId = () => (

  <div className={styles.component}>
    <h2>
    Id:
      {useParams().id}
    </h2>
    
  </div>

);

export default TablesEventsId;
