import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import NameField from '../atoms/textField.name';
import BirthField from '../atoms/textField.birth';


const dateValidate = (dateStr) => {
  const stDate = new Date('1912');
  const endDate = new Date('2040');
  const chDate = new Date(dateStr);
  console.log(stDate, endDate);
  console.log(chDate < stDate);
  if (chDate < stDate) {
    alert('1912年～2040年の範囲で入力してください');
  } else if (chDate > endDate) {
    alert('1912年～2040年の範囲で入力してください');
  } else {
    return true;
  }
  return false;
};

const EntryData = (props) => {
  const {
    cosNameDispatch,
    birthDateDispatch,
  } = props;
  const [name, setName] = useState();
  const [birth, setBirth] = useState();
  const [open, setOpen] = useState(true);

  console.log('n,b', name, birth);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    cosNameDispatch(name);
    const check = dateValidate(birth);
    if (check) {
      birthDateDispatch(birth);
      setOpen(false);
    }
  };
  console.log('cosNameDispatch', birthDateDispatch);


  return (
    <Grid>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        変更
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <NameField dispatch={setName} />
          <BirthField dispatch={setBirth} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            登録
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
EntryData.defaultProps = {
  cosNameDispatch: () => {},
  birthDateDispatch: () => {},
};
EntryData.propTypes = {
  cosNameDispatch: PropTypes.func,
  birthDateDispatch: PropTypes.func,
};


export default EntryData;
