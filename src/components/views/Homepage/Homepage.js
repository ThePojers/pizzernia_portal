import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const orders = [
  {id: '1', time: '10:30', table: '5', people: '1'},
  {id: '2', time: '15:00', table: '1', people: '3'},
];
const bookings = [
  {id: '1',  time: '10:30', table: '2', people: '5'},
  {id: '2',  time: '15:00', table: '1', people: '9'},
];
const Homepage = () => {
  const bull = <span className={styles.bullet}>•</span>;
  return (
    <Paper className={styles.component}>
      <Card className={styles.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
          Orders{bull} 12
          </Typography>
          <Typography variant="h5" component="h2">
          Orders Completed{bull} 11
          </Typography>
        </CardContent>
      </Card>
      <h2>Today Orders</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order id</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>People</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2>Today Events</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event id</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>People</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );};

export default Homepage;
