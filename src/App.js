import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DialerScreen from "./components/DialerScreen";
import DialedNumberScreen from "./components/DialedNumberScreen";
import CallLogScreen from "./components/CallLogScreen";
import DialerContext from "./components/DialerContext";

const App = () => {
  const [dialedNumber, setDialedNumber] = useState("");
  const [callLog, setCallLog] = useState([]);

  const dialerContextValue = {
    dialedNumber,
    setDialedNumber,
    callLog,
    setCallLog,
  };

  return (
    <DialerContext.Provider value={dialerContextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<DialerScreen />} />
          <Route path="/dialed" element={<DialedNumberScreen />} />
          <Route path="/call-log" element={<CallLogScreen />} />
        </Routes>
      </Router>
    </DialerContext.Provider>
  );
};

export default App;
