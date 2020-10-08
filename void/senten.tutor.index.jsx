import React, { useReducer } from 'react';

import Senten from '../components/sentenTutor/index';
import Dialog from '../components/dialog/entryData';
import './index.scss';

// import Test from '../components/sentenVisitor/test';


const reducer = (s, a) => a;

const IndexPage = () => {
  const [cosName, cosNameDispatch] = useReducer(reducer, 'index');
  const [birthDate, birthDateDispatch] = useReducer(reducer, '1940-01-02');

  return (
    <div>
      <Senten
        cosName={cosName}
        birthDate={birthDate}
        dialog={Dialog({ cosNameDispatch, birthDateDispatch })}
      />
    </div>
  );
};


export default IndexPage;
