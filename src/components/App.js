import React from 'react';
import Box from '@mui/material/Box';

import MyToolbar from './MyToolbar.js';
import OverallRepre from './OverallRepre.js';

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <MyToolbar />
      <OverallRepre />
    </Box>
  );
}

export default App;
