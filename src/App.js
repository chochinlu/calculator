import React, { Component } from 'react';

const Row = props => {
  const style = 'flex pa2 justify-center';
  return <div className={style}>{props.children}</div>;
};

const Ele = ({ children, width = '25', bg = 'bg-washed-green' }) => {
  const style = `w-${width} ${bg} outline pa3 mr3`;

  return <div className={style}>{children}</div>;
};

const CalEle = props => (
  <Ele bg={'bg-yellow'}>
    <strong>{props.children}</strong>
  </Ele>
);

const TotalEle = props => (
  <Ele width={100} bg={'bg-lightest-blue'}>
    <h1 className="tr">{props.children}</h1>
  </Ele>
);

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <TotalEle>0</TotalEle>
        </Row>
        <Row>
          {['AC', '+/-', '%', '/'].map((ele, index) => (
            <CalEle key={`cal-${index}`}>{ele}</CalEle>
          ))}
        </Row>
        <Row>
          {[7, 8, 9].map(ele => (
            <Ele key={ele}>{ele}</Ele>
          ))}
          <CalEle>X</CalEle>
        </Row>
        <Row>
          {[4, 5, 6].map(ele => (
            <Ele key={ele}>{ele}</Ele>
          ))}
          <CalEle>-</CalEle>
        </Row>
        <Row>
          {[1, 2, 3].map(ele => (
            <Ele key={ele}>{ele}</Ele>
          ))}
          <CalEle>+</CalEle>
        </Row>
        <Row>
          <Ele width={50}>0</Ele>
          <Ele>.</Ele>
          <CalEle>=</CalEle>
        </Row>
      </div>
    );
  }
}

export default App;
