import React from 'react';

const Ele = ({ children, width = '25', bg = 'bg-washed-green', onClick }) => {
  const style = `w-${width} ${bg} pa3 tc helvetica black-70 b--solid b--white-90 pointer `;

  return (
    <div className={style} onClick={onClick}>
      <h1 className="f1">{children}</h1>
    </div>
  );
};

export default Ele;
