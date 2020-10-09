import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, PostStatusToAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  postStatus: (payload, id, order) => dispatch(PostStatusToAPI(payload, id, order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);