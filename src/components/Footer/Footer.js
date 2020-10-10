import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './Footer.module.css';

const Footer = ({dealNumber}) => (<footer>
  <label className={styles.dealNumber}>Осталось выполнить {dealNumber} задания</label>
  <div className={styles.filters}>
  <ButtonGroup
  className={styles.filter}
  size="small"
  variant="text"
  aria-label="small text primary button group">
  <Button>Все</Button>
  <Button>Активные</Button>
  <Button>Выполненные</Button>
  </ButtonGroup>
  </div>
  </footer>
);

export default Footer;
