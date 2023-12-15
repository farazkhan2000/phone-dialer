
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import DialerContext from './DialerContext';

const DialerScreen = () => {
  const { dialedNumber, setDialedNumber, setCallLog } = useContext(DialerContext);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleNumberClick = (number) => {
    setDialedNumber((prevNumber) => prevNumber + number);
  };

  const handleCall = () => {
    // You can perform any call-related functionality here
    // For now, let's simulate a call by adding it to the call log
    setCallLog((prevLog) => [{ number: dialedNumber, time: new Date() }, ...prevLog]);

    // Navigate to Dialed Number Screen after the call
    navigate('/dialed');
  };

  const handleReset = () => {
    setDialedNumber('');
  };

  return (
    <section>
      <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className='border border-5 rounded p-5'>
          <h1 className='fw-bold mb-5'>Phone Dialer</h1>
          <div>
            <div className='fs-1 fw-bold text-center'>{dialedNumber}</div>
            
            <div className='row d-flex justify-content-center'>
              <div className="col-4 g-3 d-flex flex-column justify-content-center align-items-center gap-3">
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('7')}>7</button>
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('4')}>4</button>
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('1')}>1</button>
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('*')}>*</button>
              </div>
            
              <div className="col-4 g-3 d-flex flex-column justify-content-center align-items-center gap-3">
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('8')}>4</button>
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('5')}>5</button>
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('2')}>6</button>
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('0')}>0</button>
              </div>
              <div className="col-4 g-3 d-flex flex-column justify-content-center align-items-center gap-3">
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('9')}>7</button>
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('6')}>8</button>
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('3')}>9</button>
                <button className='btn btn-outline-dark px-3 fs-4 rounded-circle' style={{  }} onClick={() => handleNumberClick('#')}>#</button>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <button className='mt-4 btn btn-primary px-5 btn-lg' onClick={handleCall}>Call</button>
              <button className='mt-4 btn btn-danger px-5 btn-lg' onClick={handleReset}>Reset</button>
            </div>
          </div>
          
          <Link className='btn mt-3 ' to="/dialed">Go to Dialed Number Screen</Link>
        </div>
      </div>
    </section>
  );
};

export default DialerScreen;


