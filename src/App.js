// react imports
import React from "react";
// react router imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// child components import
import Dashboard from "./Dashboard/Dashboard";
import InvoiceEditor from "./InvoiceEditor/InvoiceEditor"
import NavBar from "./NavBar/NavBar";
import NewInvoicePage from "./NewInvoice/NewInvoicePage";
import Clients from "./Clients/Clients";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="mainContent">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/NewInvoice/:id?' element={<NewInvoicePage />} />
          <Route path='/InvoiceEditor/:id/:projectId' element={<InvoiceEditor />} />
          <Route path='/Clients' element={<Clients />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
