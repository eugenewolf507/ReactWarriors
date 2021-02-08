import { connect } from 'react-redux';
import { selectAction } from './selectActions';
import getSelectValue from '../../redux/selectorSelectors';
import Selector from './Select';

const mapStateToProps = state => ({
  value: getSelectValue(state),
});

const mapDispatchToProps = { selectAction };

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
