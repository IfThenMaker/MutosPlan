import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({

});

const heads = [
  'index', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
];

const bodys = {}

const createData = (title, value) => ({ title, value });

const Kami = ({ megurihanagami }) => (
  <TableRow>
    <TableCell>index</TableCell>
    {Object.keys(megurihanagami).map((num) => (
      <TableCell key={`kami${num}`}>
        <Grid>
          {megurihanagami[num].kami}
        </Grid>
        <Grid>
          {megurihanagami[num].jyoutai}
        </Grid>
        <Grid>
          {megurihanagami[num].ten}
        </Grid>
      </TableCell>
    ))}
  </TableRow>
);



const KoutenTable = ({
  megurihanagami, megurinen, megurituki,
}) => {
  const classes = useStyles();

  return (
    <Paper>
      <TableContainer>
        <TableHead>
          <TableRow>
            {heads.map((h) => (
              <TableCell
                key={`kt${h}`}
              >
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <Kami megurihanagami={megurihanagami} />
        </TableBody>
      </TableContainer>
    </Paper>
  );
};

KoutenTable.defaultProps = {
  megurihanagami: { 1: { kami: 'ksai', jyoutai: 'ten,syu', ten: '8' } },
  megurinen: 'kashin',
  megurituki: 'bodys',
};
KoutenTable.propTypes = {
  megurihanagami: PropTypes.object,
  megurinen: PropTypes.object,
  megurituki: PropTypes.object,
};


export default KoutenTable;
