import React from 'react';

const NotFound = () => {
  const goBack = () => {
    window.history.back();
  }
  return (
    <div>
      <div className="notfound-main">
        <h1>404 გვერდი ვერ მოიძებნა</h1>
        <button onClick={goBack} className='notfound-goback'>←უკან</button>
      </div>
    </div>
  );
}

export default NotFound;
