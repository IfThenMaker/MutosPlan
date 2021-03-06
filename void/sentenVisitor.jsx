import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import NameField from '../textField.name';
import BirthField from '../textField.birth';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SentenVisitor = () => {
  const today = new Date();
  const classes = useStyles();

  return (
    <div>
      <div className="senten-visitor-head">
        <Grid item>
          head
        </Grid>
      </div>
      <div className="senten-visitor-meta">
        <Grid>
          <NameField />
          <BirthField />
        </Grid>
        <p>
          today:
          {today.getMonth() + 1}
          {today.getDate()}
        </p>
        <div className="senten-visitor-imput">

        </div>
        <div className="senten-visitor-body">
          <Grid item>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </div>
      </div>

    </div>
  );
};

export default SentenVisitor;

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
//   <Dialog />
// </MuiPickersUtilsProvider>
