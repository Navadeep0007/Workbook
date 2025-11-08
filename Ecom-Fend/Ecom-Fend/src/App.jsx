import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/Aboutus";

function App() {
  return (
    <div className="app-root">
      <video
        className="app-bg-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/bg-poster.jpg"
      >
        <source src="/itachi-shillouette-in-front-of-the-red-moon.3840x2160.mp4" type="video/mp4" />
      </video>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;