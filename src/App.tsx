import { Suspense, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import { v0 } from './utils/api';
import './App.css';
import React from 'react';

const MFE1 = React.lazy(() => import('mfe1/App'));

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    v0.authenticate();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Core</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Suspense fallback={'Loading'}>
        <MFE1 />
      </Suspense>
    </div>
  );
}

export default App;
