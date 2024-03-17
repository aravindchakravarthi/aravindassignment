import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import { useState } from 'react';


function App() {
  const [status, setStatus] = useState(true);

  function handleData(data) {
    setStatus(data);
  }

  return (
    <div className="App df jcsb">
      <Sidebar onData={handleData} />
      <Main status={status} />
    </div>
  );
}


export default App;
