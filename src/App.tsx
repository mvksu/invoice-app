import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Home/Homepage";
import InvoiceView from "./components/Invoice/InvoiceView";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/invoice/:id" element={<InvoiceView />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
