import React from 'react';
import Ele from './Ele';

const CalEle = props => (
  <Ele bg={'bg-yellow'} onClick={props.onClick}>
    {props.children}
  </Ele>
);

export default CalEle;
