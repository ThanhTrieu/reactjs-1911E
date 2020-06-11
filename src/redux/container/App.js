import AppComponent from '../components/App';
import { connect } from 'react-redux';
import {incrementNumber, decrementNumber} from '../action/index';
// noi se truyen state hay action thanh props sang cac cac components
const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    clickDecrement: (val) => dispatch(decrementNumber(val)),
    clickIncrement: (val) => dispatch(incrementNumber(val))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppComponent);