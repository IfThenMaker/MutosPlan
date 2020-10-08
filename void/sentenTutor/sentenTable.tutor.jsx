import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  num: {
    margin: '0',
    paddingLeft: '15px',
  },
  main: {
    margin: '0',
  },
  sub: {
    margin: '0',
    fontSize: '0.8em',
  },
});

const createData = (
  title, value, kyoujyaku, inyo, danjyo,
) => ({
  title, value, kyoujyaku, inyo, danjyo,
});


const SentenTable = ({
  teikeimei, syugokashin, bodykashin, kyoujyaku, inyo, danjyo,
}) => {
  // const { teikeimei, syugokashin, bodykashin } = props;
  const classes = useStyles();
  const rows = [
    createData('teikeimei', teikeimei, kyoujyaku, inyo, danjyo),
    createData('syugokashin', syugokashin, kyoujyaku, inyo, danjyo),
    createData('bodykashin', bodykashin, kyoujyaku, inyo, danjyo),
    // createData('kyoujyaku', kyoujyaku),
    // createData('inyo', inyo),
    // createData('danjyo', danjyo),
  ];
  const titleJa = {
    teikeimei: {
      num: '①',
      main: '提携命',
      sub: '（魂・深層願望）',
    },
    syugokashin: {
      num: '②',
      main: '守護華神',
      sub: '（守り神・一生のテーマ）',
    },
    bodykashin: {
      num: '③',
      main: 'ボディ華神',
      sub: '（印象・仮のテーマ）',
    },
    kyoujyaku: '強弱',
    inyo: '陰陽',
    danjyo: '男女性',
  };

  return (
    <TableContainer className={classes.th}>
      <h4>貴方の魂と２神のバランス</h4>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell>{titleJa.kyoujyaku}</TableCell>
            <TableCell>{titleJa.inyo}</TableCell>
            <TableCell>{titleJa.danjyo}</TableCell>
          </TableRow>
          {rows.map(
            (row) => (
              <TableRow key={row.title}>
                <TableCell className={classes.th} component="th">
                  <p className={classes.num}>{titleJa[row.title].num}</p>
                </TableCell>
                <TableCell className={classes.th}>
                  <p className={classes.main}>{titleJa[row.title].main}</p>
                  <p className={classes.sub}>{titleJa[row.title].sub}</p>
                </TableCell>
                <TableCell className={classes.th}>{row.value}</TableCell>
                <TableCell className={classes.th}>{row.kyoujyaku}</TableCell>
                <TableCell className={classes.th}>{row.inyo}</TableCell>
                <TableCell className={classes.th}>{row.danjyo}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

SentenTable.defaultProps = {
  teikeimei: 'inochi',
  syugokashin: 'kashin',
  bodykashin: 'bodys',
  kyoujyaku: -1,
  inyo: 1,
  danjyo: -2,
};
SentenTable.propTypes = {
  teikeimei: PropTypes.string,
  syugokashin: PropTypes.string,
  bodykashin: PropTypes.string,
  kyoujyaku: PropTypes.number,
  inyo: PropTypes.number,
  danjyo: PropTypes.number,
};


export default SentenTable;
