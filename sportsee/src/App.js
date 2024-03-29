import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/app.css";
import NavHeader from "./components/NavHeader";
import NavLeft from "./components/NavLeft";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <div className="app-content">
        <NavLeft />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
