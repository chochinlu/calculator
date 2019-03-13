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

const App = () => {
  const [numA, setNumA] = useState(0);
  const [isFloat, setIsFloat] = useState(false);

  const clickNum = num => {
    if (numA === 0) {
      setNumA(num);
    } else {
      if (isFloat) {
        //TODO: check numA is float  3.2 -> 3.22 -> 3.233
      } else {
        setNumA(`${numA * 10 + num}`);
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
        <TotalEle>{numA}</TotalEle>
      </Row>
      <Row>
        <CalEle onClick={clearNum}>AC</CalEle>
        <CalEle onClick={switchNegativePositive}>+/-</CalEle>
        <CalEle onClick={makeNumPercent}>%</CalEle>
        <CalEle onClick={makeNumPercent}>÷</CalEle>
      </Row>
      <Row>
        {[7, 8, 9].map(ele => (
          <Ele key={ele} onClick={() => clickNum(ele)}>
            {ele}
          </Ele>
        ))}
        <CalEle>X</CalEle>
      </Row>
      <Row>
        {[4, 5, 6].map(ele => (
          <Ele key={ele} onClick={() => clickNum(ele)}>
            {ele}
          </Ele>
        ))}
        <CalEle>-</CalEle>
      </Row>
      <Row>
        {[1, 2, 3].map(ele => (
          <Ele key={ele} onClick={() => clickNum(ele)}>
            {ele}
          </Ele>
        ))}
        <CalEle>+</CalEle>
      </Row>
      <Row>
        <Ele width={50} onClick={() => clickNum(0)}>
          0
        </Ele>
        <Ele onClick={() => setFloat()}>.</Ele>
        <CalEle>=</CalEle>
      </Row>
    </div>
  );
};

export default App;
