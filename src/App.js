import "./App.css";
import Navbar1 from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import IsPrivate from "./components/IsPrivate";
import AddBox from "./pages/AddBox";
import ListBoxes from "./pages/ListBoxes";
import MedicationDetail from "./pages/MedicationDetail";
import LandingPage from "./pages/LandingPage";




function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar1 />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/medication" element={<ListBoxes/>} />
        <Route
          path="/medication/add"
          element={<AddBox/>}
        />

        <Route path="/medication/:boxID" element={<MedicationDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}
// <IsPrivate>
// </IsPrivate>

export default App;