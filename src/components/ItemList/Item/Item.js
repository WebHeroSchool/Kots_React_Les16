import React from 'react';
import styles from './Item.module.css'
import classnames from 'classnames';

const Item = ({deal, isDone}) => (<span className={classnames({
  [styles.item]: true,
  [styles.done]: isDone
})}>{deal}</span>);

export default Item;
