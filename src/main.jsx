import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Datefns from './datefns.jsx';
import Spin from './spin.jsx';
import CF from './codeforces.jsx';
import Movie from './movie.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="center-all">
      <Movie/>
      <CF />
      

    </div>
  </StrictMode>,
);
