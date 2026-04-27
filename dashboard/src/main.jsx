
// dashboard/src/main.jsx
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Home from "./components/Home";

function Root() {
  const [verified, setVerified] = useState(null); // null = still checking

  useEffect(() => {
    axios.get("http://localhost:3002/verify", { withCredentials: true })
      .then(({ data }) => {
        if (data.status) {
          setVerified(true);
        } else {
          window.location.href = "http://localhost:5173/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:5173/login";
      });
  }, []);

  if (verified === null) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);