import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Button from "./Layout/button";
import Navbar from "./Layout/Navbar";
import Home from "./Views/Home"
import Repo from "./Views/Repo"
import About from "./Views/About"

export default function App() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[300px] bg-[#283044] rounded-t-[20px] text-white h-[60vh] md:h-[55vh] flex justify-center items-start">
          <div className="flex justify-center items-center flex-col">
            <Router>
            <Navbar/>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/repo" element={<Repo />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
      <Button />
    </div>
  )
}
