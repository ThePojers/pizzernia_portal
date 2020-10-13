import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    putStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  orderHandler(id){
    switch (id) {
      case 3:
        return 123;
      default:
        return null;
      case 4:
        return 234;
      case 5:
        return 345;
      case 6:
        return 456;
    }
  }

  renderActions(status, id){
    const { putStatus } = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => putStatus('thinking', id, this.orderHandler(id))}>thinking</Button>
            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => putStatus('prepared', id, this.orderHandler(id))}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => putStatus('delivered', id, this.orderHandler(id))}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => putStatus('paid', id, this.orderHandler(id))}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => putStatus('free', id, this.orderHandler(id))}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`} >
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell >
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
