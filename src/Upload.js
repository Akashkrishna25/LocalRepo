// import React, { useState } from "react";
// import axios from "axios";

// function Upload() {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Please select a file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post(
//         "http://127.0.0.1:8000/upload/",
//         formData
//       );

//       setResult(res.data);
//     } catch (error) {
//       console.error(error);
//       alert("Error uploading file");
//     }
//   };

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />

//       <br /><br />

//       <button onClick={handleUpload}>Upload</button>

//       {result && (
//         <div style={{ marginTop: "20px", textAlign: "left" }}>
//           <h3>Extracted Text:</h3>
//           <pre>{result.text}</pre>

//           <h3>Extracted Data:</h3>
//           <pre>{JSON.stringify(result.data, null, 2)}</pre>

//           <h3>Verification:</h3>
//           <pre>{JSON.stringify(result.verification, null, 2)}</pre>

//           <h3>Report:</h3>
//           <pre>{result.report}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Upload;

// import React, { useState } from "react";
// import axios from "axios";

// function Upload() {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [loading, setLoading] = useState(false);

  

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Upload a file first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     // const res = await axios.post(
//     //   "http://127.0.0.1:8000/upload/",
//     //   formData
//     // );

//     setLoading(true);
// const res = await axios.post("http://127.0.0.1:8000/upload/", formData);
// setResult(res.data);
// setLoading(false);

//     setResult(res.data);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragging(false);
//     setFile(e.dataTransfer.files[0]);
//   };

//   const startVoice = () => {
//   const recognition = new window.webkitSpeechRecognition();
//   recognition.start();

//   recognition.onresult = (event) => {
//     alert("You said: " + event.results[0][0].transcript);
//   };
// };
  
  

//   return (
//     <div className="card">

//       {/* Upload Box */}
//       <div
//         className="upload-box"
//         onDragOver={(e) => {
//           e.preventDefault();
//           setDragging(true);
//         }}
//         onDragLeave={() => setDragging(false)}
//         onDrop={handleDrop}
//       >
//         <h3>📂 Drag & Drop File Here</h3>
//         <p>or click below</p>
//         <input
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//       </div>

      

//       <button className="button" onClick={handleUpload}>
//         🚀 Process Document
//       </button>

//       {/* Results */}
//       {result && (
//         <div className="result-box">

//           <div className="card">
//             <h3>📄 Extracted Data</h3>
//             <pre>{JSON.stringify(result.data, null, 2)}</pre>
//           </div>

//           <div className="card">
//             <h3>✅ Verification</h3>
//             <pre>{JSON.stringify(result.verification, null, 2)}</pre>
//           </div>

//           <div className="card">
//             <h3>📊 Report</h3>
//             <pre>{result.report}</pre>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }

// export default Upload;


// import React, { useState } from "react";
// import axios from "axios";

// function Upload() {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const upload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);

//     setLoading(true);

//     const res = await axios.post(
//       "http://127.0.0.1:8000/upload/",
//       formData
//     );

//     setResult(res.data);
//     setLoading(false);
//   };

//   return (
//     <div>
//       <h2>Upload Document</h2>

//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />

//       <button onClick={upload}>Upload</button>

//       {loading && <p>🤖 AI Processing...</p>}

//       {result && (
//         <pre>{JSON.stringify(result, null, 2)}</pre>
//       )}
//     </div>
//   );
// }

// export default Upload;



import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const upload = async () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    const res = await axios.post(
      "http://127.0.0.1:8000/upload/",
      formData
    );

    setResult(res.data);
    setLoading(false);
  };

  return (
    <div className="workspace">

      {/* Upload Box */}
      <div className="upload-card">
        <h2>📂 Upload Loan Document</h2>

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button onClick={upload}>🚀 Analyze Document</button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="loader">
          🤖 AI is analyzing your document...
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="results">

          <div className="card">
            <h3>📄 Extracted Data</h3>
            <pre>{JSON.stringify(result.data, null, 2)}</pre>
          </div>

          <div className="card">
            <h3>✅ Verification</h3>
            <pre>{JSON.stringify(result.verification, null, 2)}</pre>
          </div>

          <div className="card">
            <h3>📊 Report</h3>
            <pre>{result.report}</pre>
          </div>

        </div>
      )}
    </div>
  );
}

export default Upload;