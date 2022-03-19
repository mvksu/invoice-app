import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Home/Homepage";
import InvoiceView from "./components/Invoice/InvoiceView";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation()

  return (
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/invoice/:id" element={<InvoiceView />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
  );
}

export default App;
