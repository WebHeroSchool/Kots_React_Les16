import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import classnames from "classnames";

class Footer extends React.Component {
  render() {
    const {dealNumber, filter, onClickSort} = this.props;
    
    return (<footer>
      <label className={styles.dealNumber}>Количество задач: <b>{dealNumber}</b></label>
      <div className={styles.filters}>
      <ButtonGroup
      className={styles.filter}
      size="small"
      variant="text"
      aria-label="small text primary button group">
      <Button onClick={() => onClickSort('all')}
      className={classnames({[styles.selected]: (filter === 'all')})}>Все</Button>
      <Button onClick={() => onClickSort('active')}
      className={classnames({[styles.selected]: filter === 'active'})}>Активные</Button>
      <Button onClick={() => onClickSort('done')}
      className={classnames({[styles.selected]: filter === 'done'})}>Выполненные</Button>
      </ButtonGroup>
      </div>
      </footer>
    );
  }
}

Footer.defaultProps = { dealNumber: 0 };

Footer.propTypes = {
  dealNumber: PropTypes.number
};

export default Footer;
