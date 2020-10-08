import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Favorite from '@material-ui/icons/Favorite';

import Jintai from '../../assets/jintai.svg';
import Num from './sentenJintai.number';


const useStyles = makeStyles({
  base: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    width: '300px',
    height: '400px',
    margin: 'auto',
    borderRadius: '10px',
    border: '2px solid rgb(0,0,0,0.77)',
  },
  obal: {
    display: 'flex',
    // position: 'relative',
    justifyContent: 'center',
    width: '220px',
    height: '370px',
    borderRadius: '105px / 185px',
    margin: 'auto',
  },
  jintai: {
    width: '140px',
    height: '330px',
    filter: 'drop-shadow(0px 0px 2px black)',
  },
});

const SentenJintai = ({
  jinColor, syugoColor, bodyColor,
}) => {
  const classes = useStyles();
  const baseColor = { background: syugoColor };
  const obalColor = { background: bodyColor };
  const jintaiColor = { fill: 'floralwhite' };
  const hart = {
    position: 'absolute',
    top: '103px',
    left: '130px',
    fontSize: '38',
    color: jinColor,
    zIndex: '1',
  };
  const styleOne = {
    top: '90px',
    left: '160px',
    zIndex: '1',
  };
  const styleTwo = {
    top: '20px',
    left: '250px',
  };
  const styleThree = {
    top: '65px',
    left: '197px',
  };

  return (
    <Grid container>
      <div className={classes.base} style={baseColor}>
        <Favorite style={hart} />
        <Num number="1" styleSet={styleOne} />
        <Num number="2" styleSet={styleTwo} />
        <Num number="3" styleSet={styleThree} />
        <div className={classes.obal} style={obalColor}>
          <Jintai className={classes.jintai} style={jintaiColor} />
        </div>
      </div>
    </Grid>
  );
};
SentenJintai.defaultProps = {
  jinColor: '#AAAAAA',
  syugoColor: '#EEEEEE',
  bodyColor: '#CCCCCC',
};
SentenJintai.propTypes = {
  jinColor: PropTypes.string,
  syugoColor: PropTypes.string,
  bodyColor: PropTypes.string,
};


export default SentenJintai;


// <Jintai className={classes.jintai} style={jintaiColor} />
