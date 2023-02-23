import "./App.css";
import Navbar1 from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import IsPrivate from "./components/IsPrivate";
import AddMedbox from "./pages/AddMedbox";
import ListMedbox from "./pages/ListMedbox";
import MedboxDetail from "./pages/MedboxDetail";
import LandingPage from "./pages/Landingpage";




function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar1 />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/medbox" element={<ListMedbox/>} />
        <Route
          path="/medbox/add"
          element={
            <IsPrivate>
            <AddMedbox></AddMedbox>
            </IsPrivate>
          }
        />

        <Route path="/medbox/:medboxID" element={<MedboxDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;