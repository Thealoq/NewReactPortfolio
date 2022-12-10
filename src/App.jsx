import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Button from "./Layout/Button";
import Navbar from "./Layout/Navbar";
import Home from "./Views/Home"
import Repo from "./Views/Repo"
import About from "./Views/About"

export default function App() {
  return (
    <div>
        <div className="context top-[18vh]">
        <div className="flex justify-center items-center inset-0 m-auto">
        <div className="w-[300px] bg-[#283044] rounded-t-[20px] text-white h-[530px]  flex justify-center items-start">
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
        <div class="area" >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
    </div>
  )
}
