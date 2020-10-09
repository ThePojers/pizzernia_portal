import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const bookings = [
  {hour: '15:00', table1: 3, table2: null, table3: null, table4: 6},
  {hour: '15:30', table1: null, table2: null, table3: null, table4: 6},
  {hour: '16:00', table1: null, table2: 1, table3: 7, table4: null},
  {hour: '16:30', table1: null, table2: null, table3: null, table4: null},
  {hour: '17:00', table1: null, table2: 3, table3: null, table4: null},
  {hour: '17:30', table1: null, table2: null, table3: null, table4: 8},
];

const events = [
  {hour: '15:00', table1: null, table2: 2, table3: null, table4: null},
  {hour: '15:30', table1: null, table2: null, table3: null, table4: null},
  {hour: '16:00', table1: null, table2: null, table3: null, table4: null},
  {hour: '16:30', table1: null, table2: null, table3: null, table4: null},
  {hour: '17:00', table1: null, table2: null, table3: 4, table4: 3},
  {hour: '17:30', table1: null, table2: null, table3: null, table4: null},
];


const Tables = () => {
  return (
    <Paper className={styles.component}>
      <form className={styles.container} noValidate>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} color="primary" variant="contained" className={styles.button}>Add Booking</Button>

      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map(row => (
              <TableRow key={row.hour}>
                <TableCell component="th" scope="row">
                  {row.hour}
                </TableCell>
                <TableCell>
                  {row.table1 && (
                    <Link className={styles.bookingLink} to={`${process.env.PUBLIC_URL}/tables/bookings/booking/${row.table1}`}>
                      {row.table1}
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {row.table2 && (
                    <Link className={styles.bookingLink} to={`${process.env.PUBLIC_URL}/tables/bookings/booking/${row.table2}`}>
                      {row.table2}
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {row.table3 && (
                    <Link className={styles.bookingLink} to={`${process.env.PUBLIC_URL}/tables/bookings/booking/${row.table3}`}>
                      {row.table3}
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {row.table4 && (
                    <Link className={styles.bookingLink} to={`${process.env.PUBLIC_URL}/tables/bookings/booking/${row.table4}`}>
                      {row.table4}
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} color="primary" variant="contained" className={styles.button}>Add Event</Button>

      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map(row => (
              <TableRow key={row.hour}>
                <TableCell component="th" scope="row">
                  {row.hour}
                </TableCell>
                <TableCell>
                  {row.table1 && (
                    <Link className={styles.bookingLink} to={`${process.env.PUBLIC_URL}/tables/events/event/${row.table1}`}>
                      {row.table1}
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {row.table2 && (
                    <Link className={styles.bookingLink} to={`${process.env.PUBLIC_URL}/tables/events/event/${row.table2}`}>
                      {row.table2}
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {row.table3 && (
                    <Link className={styles.bookingLink} to={`${process.env.PUBLIC_URL}/tables/events/event/${row.table3}`}>
                      {row.table3}
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {row.table4 && (
                    <Link className={styles.bookingLink} to={`${process.env.PUBLIC_URL}/tables/events/event/${row.table4}`}>
                      {row.table4}
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );};

export default Tables;

