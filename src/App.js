import React, { useState } from 'react';

const Row = props => {
  const style = 'h-25 flex justify-center';
  return <div className={style}>{props.children}</div>;
};

const Ele = ({ children, width = '25', bg = 'bg-washed-green', onClick }) => {
  const style = `w-${width} ${bg} outline pa3  tc`;

  return (
    <div className={style} onClick={onClick}>
      <h1 className="f1">{children}</h1>
    </div>
  );
};

const CalEle = props => (
  <Ele bg={'bg-yellow'} onClick={props.onClick}>
    <strong>{props.children}</strong>
  </Ele>
);

const TotalEle = props => (
  <Ele width={100} bg={'bg-lightest-blue'}>
    <p className="f1 tr">{props.children}</p>
  </Ele>
);

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
      setNumA(numA + numB);
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
    console.log({ numA, numB });
    return numA === 0 && !numB
      ? { target: numA, handle: setNumA }
      : { target: numB, handle: setNumB };
  };

  const clickNum = num => {
    const { target, handle } = setNum();
    console.log({ target, handle });

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
        handle(`${target * 10 + num}`);
      }
    }
  };

  const clearNum = num => {
    setNumA(0);
    setIsFloat(false);
  };

  const switchNegativePositive = () => {
    setNumA(-numA);
  };

  const makeNumPercent = () => {
    setNumA(numA * 0.01);
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
