import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./context/financial-record-context";
import ProtectedRoute from "./components/ProtectedRoute";
import { Main } from "./layout/Main";

function App() {
  return (
    <Router>
      <Routes>
        {/* The main layout */}
        <Route path="/" element={<Main />}>
          {/* Non-protected route */}
          <Route path="/auth" element={<Auth />} />
          
          {/* Protected route */}
          <Route
            index
            element={
              <ProtectedRoute>
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
