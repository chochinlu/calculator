import React, { useState } from 'react';
import './App.css';
import Row from './Row';
import Ele from './Ele';
import CalEle from './CalEle';
import TotalEle from './TotalEle';

const ops = {
  add: 'ADD',
  minus: 'MINUS',
  multi: 'MULTIPLY',
  divide: 'DIVIDE'
};

const App = () => {
  const [numA, setNumA] = useState(0);
  const [isFloat, setIsFloat] = useState(false);
  const [operation, setOperation] = useState(null); //operation: add, minus, multiply, divide
  const [numB, setNumB] = useState(null);

  const handleEqual = () => {
    if (!operation || !numB) return;

    if (operation === ops.add) {
      setNumA(parseFloat(numA) + parseFloat(numB));
    }

    if (operation === ops.minus) {
      setNumA(numA - numB);
    }

    if (operation === ops.multi) {
      setNumA(numA * numB);
    }

    if (operation === ops.divide) {
      setNumA(numA / numB);
    }

    setNumB(null);
    setOperation(null);
  };

  const handleOperation = opeType => {
    if (numA === 0 && !numB) {
      return;
    }

    setOperation(opeType);
  };

  const setNum = () => {
    return !operation && !numB
      ? { target: numA, handle: setNumA }
      : { target: numB, handle: setNumB };
  };

  const clickNum = num => {
    const { target, handle } = setNum();

    if (target === 0 || !target) {
      handle(num);
    } else {
      if (isFloat) {
        const hasDot = target
          .toString()
          .split('')
          .includes('.');
        hasDot
          ? handle(parseFloat(`${target}${num}`))
          : handle(parseFloat(`${target}.${num}`));
      } else {
        Math.sign(target) < 0
          ? handle(target * 10 - num)
          : handle(target * 10 + num);
      }
    }
  };

  const clearNum = num => {
    setNumA(0);
    setNumB(null);
    setOperation(null);
    setIsFloat(false);
  };

  const switchNegativePositive = () => {
    const { target, handle } = setNum();
    handle(-target);
  };

  const makeNumPercent = () => {
    const { target, handle } = setNum();
    handle(target * 0.01);
  };

  const setFloat = () => {
    if (isFloat) {
      return;
    }

    setIsFloat(!isFloat);
  };

  return (
    <div className="flex flex-column vh-100">
      <Row>
        <TotalEle>{numB ? numB : numA}</TotalEle>
      </Row>
      <Row>
        <CalEle onClick={clearNum}>AC</CalEle>
        <CalEle onClick={switchNegativePositive}>+/-</CalEle>
        <CalEle onClick={makeNumPercent}>%</CalEle>
        <CalEle onClick={() => handleOperation(ops.divide)}>÷</CalEle>
      </Row>
      <Row>
        {[7, 8, 9].map(ele => (
          <Ele key={ele} onClick={() => clickNum(ele)}>
            {ele}
          </Ele>
        ))}
        <CalEle onClick={() => handleOperation(ops.multi)}>X</CalEle>
      </Row>
      <Row>
        {[4, 5, 6].map(ele => (
          <Ele key={ele} onClick={() => clickNum(ele)}>
            {ele}
          </Ele>
        ))}
        <CalEle onClick={() => handleOperation(ops.minus)}>-</CalEle>
      </Row>
      <Row>
        {[1, 2, 3].map(ele => (
          <Ele key={ele} onClick={() => clickNum(ele)}>
            {ele}
          </Ele>
        ))}
        <CalEle onClick={() => handleOperation(ops.add)}>+</CalEle>
      </Row>
      <Row>
        <Ele width={50} onClick={() => clickNum(0)}>
          0
        </Ele>
        <Ele onClick={() => setFloat()}>.</Ele>
        <CalEle onClick={() => handleEqual()}>=</CalEle>
      </Row>
    </div>
  );
};

export default App;
