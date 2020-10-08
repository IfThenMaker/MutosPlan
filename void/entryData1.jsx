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
    alert('