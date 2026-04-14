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

// export default App;


// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import Upload from "./Upload";
// import Dashboard from "./Dashboard";
// import Login from "./Login";
// import "./styles.css";

// function App() {
//   const [page, setPage] = useState("upload");

//   return (
//     <div className="app">
//       <Sidebar setPage={setPage} />

//       <div className="main">
//         {page === "upload" && <Upload />}
//         {page === "dashboard" && <Dashboard />}
//         {page === "login" && <Login />}
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import Login from "./Login";
// import Sidebar from "./Sidebar";
// import Upload from "./Upload";
// import Dashboard from "./Dashboard";
// import "./styles.css";

// function App() {
//   const [isAuth, setIsAuth] = useState(false);
//   const [page, setPage] = useState("upload");

//   if (!isAuth) return <Login setIsAuth={setIsAuth} />;

//   return (
//     <div className="app">
//       <Sidebar setPage={setPage} />

//       <div className="main">
//         {page === "upload" && <Upload />}
//         {page === "dashboard" && <Dashboard />}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Login from "./Login";
import Upload from "./Upload";
import "./styles.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) return <Login setIsAuth={setIsAuth} />;

  return (
    <div className="app-container">

      {/* Header */}
      <div className="header">
        <h1>🚀 AI Loan Verification</h1>
        <p>Smart Document Intelligence System</p>
      </div>

      {/* Main Workspace */}
      <Upload />

    </div>
  );
}

export default App;