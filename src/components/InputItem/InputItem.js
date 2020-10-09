import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
  id="standard-full-width"
  style={{ margin: 8 }}
  placeholder="Что нужно сделать?"
  fullWidth
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
  />
  </div>
);

export default InputItem;
