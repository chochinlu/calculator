import React from 'react';

const Row = props => {
  const style = 'h-25 flex justify-center';
  return <div className={style}>{props.children}</div>;
};

export default Row;
