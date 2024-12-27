import PropTypes from 'prop-types';
import styles from './Limit.module.scss';
import CONSTANTS from '../../constants';

const Limit = (props) => {
  const limits = CONSTANTS.LIMITS;
  const { limit, changeLimit } = props;
  const showOption = (limit) => <option key={limit}>{limit}</option>;

  return (
    <div className={styles.limit}>
      <select name="limitUsers" value={limit} onChange={changeLimit}>
        {limits.map(showOption)}
      </select>
    </div>
  );
};

Limit.propTypes = {
  limit: PropTypes.number,
  changeLimit: PropTypes.func,
};

export default Limit;
