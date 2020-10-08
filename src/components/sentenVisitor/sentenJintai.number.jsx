import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  number: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18px',
    height: '18px',
    fontSize: '17px',
    backgroundColor: 'white',
    borderRadius: '50%',
  },
});

const SentenNumber = ({ number, styleSet }) => {
  const classes = useStyles();

  return (
    <div className={classes.number} style={styleSet}>
      {number}
    </div>
  );
};
SentenNumber.defaultProps = {
  number: '1',
  styleSet: {
    top: '90px',
    left: '160px',
  },
};
SentenNumber.propTypes = {
  number: PropTypes.string,
  styleSet: PropTypes.object,
};


export default SentenNumber;


// <Jintai className={classes.jintai} style={jintaiColor} />
