// DialedNumberScreen.js
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DialerContext from './DialerContext';

const DialedNumberScreen = () => {
  const { dialedNumber, setDialedNumber, setCallLog } = useContext(DialerContext);

  useEffect(() => {
    const callTimer = setTimeout(() => {
      setDialedNumber('');
      setCallLog((prevLog) => [...prevLog, { number: dialedNumber, time: new Date() }]);
    }, 10000);

    return () => clearTimeout(callTimer);
  }, [dialedNumber, setDialedNumber, setCallLog]);

  return (
    <section>
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className='border border-5 rounded p-5'>
      <h1 className='fw-bold mb-5'>Dialed Number Screen</h1>
      <p className='fs-4'>Dialed Number: {dialedNumber}</p>
      <p className='lead mt-5'>Call will end in 10 seconds...</p>
      <Link className='btn btn-primary px-5 text-center mt-5 d-block' to="/call-log">Go to Call Log Screen</Link>
      </div>
  </div>
  </section>
  );
};

export default DialedNumberScreen;
