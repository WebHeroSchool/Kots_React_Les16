import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import PropTypes from 'prop-types';


class Item extends React.Component {
  /*componentDidMount() {
    this.timerId = setInterval(() => console.log('interval'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }*/

  render() {
    const {deal, isDone, id, onClickCheck, onClickDelete} = this.props;
    return (
      <ListItem>
        <ListItemIcon>
          <Checkbox
          edge="start"
          checked={isDone}
          tabIndex={-1}
          disableRipple
          onClick = {() => onClickCheck(id)}
          />
        </ListItemIcon>
        <ListItemText id={id} primary={deal} />
        <ListItemSecondaryAction>
          <IconButton
          edge="end"
          aria-label="comments"
          onClick = {() => onClickDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

Item.propTypes = {
  deal: PropTypes.string,
  isDone: PropTypes.bool
};

export default Item;
