import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Homepage from './components/Home/Homepage'
import InvoiceView from './components/Invoice/InvoiceView';
import AddForm from './components/Form/AddForm';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/invoice/:id" element={<InvoiceView />}/>
          <Route path="/addform" element={<AddForm />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
