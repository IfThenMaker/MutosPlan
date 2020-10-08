import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import InputData from '../atoms/textField.inputData';


const useStyles = makeStyles({
  date: {
    textAlign: 'end',
    margin: '0',
  },
  dialog: {
    // maxWidth: '700px',
    // margin: '18px 0',
  },
});


const SentenInput = ({ dialog, cosName, birthDate }) => {
  const classes = useStyles();
  const today = new Date();
  return (
    <div>
      <Grid item>
        <p className={classes.date}>
          診断日&emsp;
          {today.getMonth() + 1}
          &nbsp;月&emsp;
          {today.getDate()}
          &nbsp;
          日
        </p>
      </Grid>
      <Grid
        className={classes.input}
        container
        spacing={5}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={8}>
          <InputData index="お名前" value={cosName} />
          <InputData index="生年月日" value={birthDate} />
        </Grid>
        <Grid item xs={12} sm={4}>
          {dialog}
        </Grid>
      </Grid>
    </div>
  );
};

SentenInput.defaultProps = {
  dialog: {},
  cosName: 'input',
  birthDate: '1950-03-01',
};
SentenInput.propTypes = {
  dialog: PropTypes.object,
  cosName: PropTypes.string,
  birthDate: PropTypes.string,
};


export default SentenInput;
