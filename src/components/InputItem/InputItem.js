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
    menuIsOpen: false,
    anchorEl: null,
    helperText: '',
    inputValue: '',
    sort: {
      id: '',
      value: ''
    },
    options: [{id: 1, value: 'None', description: 'Без сортировки'},
    {id: 2, value: 'A', description: 'С начала алфавита'},
    {id: 3, value: 'Z', description: 'С конца алфавита'}]
  };

  onClickOpenMenu = (event) => {
    this.setState({menuIsOpen: true, anchorEl: event.currentTarget});
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

    onBlurCloseSort = () => {
        this.setState({menuIsOpen: false});
    }

  render() {

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
        onKeyPress = {
          (event) => {
            if (event.key === 'Enter') { this.onButtonClick() }
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
           onClick={this.onClickOpenMenu}
          style={{padding: '13px'}}>
          <SortIcon />
        </IconButton>
        <Menu
          id="long-menu"
          keepMounted
          anchorEl={this.state.anchorEl}
          open={this.state.menuIsOpen}
          onClose={() => this.onBlurCloseSort()}
        >
          {this.state.options.map((option) => (
            <MenuItem
            key={option.id}
            onClick={()=>this.props.onClickSort(option.value)}>
              {option.description}
            </MenuItem>
          ))}
        </Menu>
    </div>);
  }
}

export default InputItem;
