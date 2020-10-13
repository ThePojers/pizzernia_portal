import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, PutStatusToAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  putStatus: (payload, id, order) => dispatch(PutStatusToAPI(payload, id, order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);