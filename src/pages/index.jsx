import React, { useReducer } from 'react';

import SentenVisitor from '../components/sentenVisitor/index';
import Dialog from '../components/dialog/entryData';
import './index.scss';

// import Test from '../components/sentenVisitor/test';


const reducer = (s, a) => a;

const IndexPage = () => {
  const [cosName, cosNameDispatch] = useReducer(reducer, 'index');
  const [birthDate, birthDateDispatch] = useReducer(reducer, '1940-01-02');

  return (
    <div>
      <SentenVisitor
        cosName={cosName}
        birthDate={birthDate}
        dialog={Dialog({ cosNameDispatch, birthDateDispatch })}
      />
    </div>
  );
};


export default IndexPage;
