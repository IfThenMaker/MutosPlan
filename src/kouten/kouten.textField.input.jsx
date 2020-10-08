import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  index: {
    margin: '0',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.9rem',

    lineHeight: '1',
    letterSpacing: '0.00938em',
  },
  value: {
    padding: '7px 0 8px',
    fontSize: '1.1876em',
    color: 'rgba(0, 0, 0, 0.87)',
    borderBottom: '1px solid rgba(0,0,0,0.47)',
  },
});

const InputData = ({ index, value }) => {
  const classes = useStyles();

  return (
    <Grid>
      <p className={classes.index}>{index}</p>
      <p className={classes.value}>{value}</p>
    </Grid>
  );
};
InputData.defaultProps = {
  index: 'index',
  value: 'value',
};
InputData.propTypes = {
  index: PropTypes.string,
  value: PropTypes.string,
};


export default InputData;
