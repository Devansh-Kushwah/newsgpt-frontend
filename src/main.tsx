import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/c/:sessionId" element={<App />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
