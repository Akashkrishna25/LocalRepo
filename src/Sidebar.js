// import React from "react";

// function Sidebar({ setPage }) {
//   return (
//     <div className="sidebar">
//       <h2>🤖 AI System</h2>

//       <button onClick={() => setPage("upload")}>📂 Upload</button>
//       <button onClick={() => setPage("dashboard")}>📊 Dashboard</button>
//       <button onClick={() => setPage("login")}>🔐 Login</button>
//     </div>
//   );
// }

// export default Sidebar;


import React from "react";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <button onClick={() => setPage("upload")}>Upload</button>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
    </div>
  );
}

export default Sidebar;