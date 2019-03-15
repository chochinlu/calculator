import React from 'react';

const TotalEle = ({ children, onClick }) => {
  const style = `w-100 pr3 bg-lightest-blue tr helvetica black-70 b--solid b--white-90`;
  return (
    <div className={style} onClick={onClick}>
      <h1 className="f1-l f1-m">{children}</h1>
    </div>
  );
};

export default TotalEle;
