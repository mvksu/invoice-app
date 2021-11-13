import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import ControlPanel from './components/Home/ControlPanel'


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ControlPanel />}/>
          <Route path="/invoice/:id" element={<div />}/>
          <Route path="/" element={<div />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
