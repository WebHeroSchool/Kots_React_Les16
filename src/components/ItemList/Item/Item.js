import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import styles from './Item.module.css';


const Item = ({
  value, isDone, id, edit, onClickCheck, onClickDelete, onDoubleClickEdit,
  onBlurSave, index, provided, innerRef  }) => {

  const initialState = {
     value: {
       value: value
     }
   };

  const [input, setInput] = useState(initialState.value);

  return (
      <ListItem
      className={styles.line}
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}>
        <ListItemIcon>
          <Checkbox
          edge="start"
          checked={isDone}
          tabIndex={-1}
          disableRipple
          onClick = {() => onClickCheck(id)}
          />
        </ListItemIcon>
        {
          edit
          ? <TextField
            id="standard-full-width"
            style={{ margin: 8, width: 315 }}
            margin="normal"
            InputLabelProps={{shrink: true,}}
            className={styles.input}
            value={input.value}
            onChange={
              event => {
                setInput({
                  value: event.target.value
                });
              }
            }
            onBlur={ () => onBlurSave(id, input.value, isDone) }
            onKeyPress = {
              (event) => {
                if (event.key === 'Enter') {
                  onBlurSave(id, input.value, isDone)
                }
              }
            }
          />
          : <ListItemText
            className={styles.text}
            primary={value}
            onDoubleClick = { () => onDoubleClickEdit(id) }
          />
        }
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

Item.propTypes = {
  deal: PropTypes.string,
  isDone: PropTypes.bool
};

export default Item;
