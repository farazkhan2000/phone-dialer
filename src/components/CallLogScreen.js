import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DialerContext from './DialerContext';

const CallLogScreen = () => {
  const { callLog, setCallLog } = useContext(DialerContext);

  const handleDeleteLog = (index) => {
    setCallLog((prevLog) => prevLog.filter((_, i) => i !== index));
  };

  return (
    <section>
      <div className="container my-5 d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className='border border-5 rounded p-5 text-center'> {/* Apply 'text-center' class here */}
          <h1 className='fw-bold mb-5'>Call Log Screen</h1>
          <ul>
            {callLog.map((log, index) => (
              <li className='d-flex align-items-center justify-content-between p-3' key={index}>
                {log.number} - {log.time.toString()}
                <button className='btn btn-danger ms-4' onClick={() => handleDeleteLog(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <Link className='btn btn-primary px-5 mt-3 d-inline-block' to="/">Go to Dialer Screen</Link>
        </div>
      </div>
    </section>
  );
};

export default CallLogScreen;
