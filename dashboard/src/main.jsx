
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CookiesProvider } from "react-cookie"
import axios from "axios"
import "./index.css"
import Home from "./components/Home"

function Root() {
  const [verified, setVerified] = useState(null)

  useEffect(() => {
     console.log("all cookies:", document.cookie)
    axios.get("http://localhost:3002/verify", { withCredentials: true })
      .then(({ data }) => {
        console.log("verify:", data)
        if (data.status) {
          setVerified(true)
        } else {
          window.location.href = "http://localhost:5175/login"
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:5175/login"
      })
  }, [])

  if (verified === null) return <div style={{ padding: "2rem" }}>Loading...</div>

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)