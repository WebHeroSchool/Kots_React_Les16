import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './InputItem.module.css';

class InputItem extends React.Component {

  state = {
    error: false,
    helperText: '',
    inputValue: '',
    sort: 'None'
  };

  onButtonClick = () => {
    if (this.state.inputValue === '') {
      this.setState({
        error: true,
        helperText: 'Введите задачу'
      });
    } else if (this.props.deals.map(deal =>
       deal.value.toUpperCase()).includes(this.state.inputValue)) {
        this.setState({
          error: true,
          helperText: 'Такая задача уже есть'
        });
      } else {
        this.setState({
          error: false,
          helperText: '',
          inputValue: ''
        });
        this.props.onClickAdd(this.state.inputValue);
      }
    };

  render() {
    const {onClickSort} = this.props;

    return (
      <div>
        <TextField
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="Что нужно сделать?"
        margin="normal"
        InputLabelProps={{shrink: true,}}
        className={styles.input}
        value={this.state.inputValue}
        onChange={
          event => {
            this.setState({
              inputValue: event.target.value.toUpperCase()
            });
          }
        }
        error={this.state.error}
        helperText={this.state.helperText}
        />
        <Button
        className={styles.add}
        onClick={this.onButtonClick}>Добавить</Button>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={() => onClickSort()}
          style={{padding: '13px 13px 0'}}
        >
          <SortIcon />
        </IconButton>
    </div>);
  }
}

export default InputItem;
