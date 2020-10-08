import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', Information: 'Carbonara with extra chees', status:'ready'},
  {id: '2', Information: 'Lasagna promodoro', status:'ready'},
  {id: '3', Information: 'Tomato soup', status:'Ordered'},
  {id: '5', Information: 'Cheesy chees Toast', status:'Ordered'},
  {id: '6', Information: 'Pizza almadiori with extra olives', status:'Ordered'},
];


const renderActions = status => {
  switch (status) {
    case 'Ordered':
      return (
        <>
          <Button>Ordered</Button>
        </>
      );
    case 'ready':
      return (
        <Button>Ready</Button>
      );
    default:
      return null;
  }
};
const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell align="center"><b>Order Information</b></TableCell>
          <TableCell align="center">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id} >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="center">
              <b>{row.Information}</b>
            </TableCell>
            <TableCell align="center">
      
              {renderActions(row.status)}
         
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
