import "./App.css";
import Header from "./components/shared/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Login from "./components/LoginSignUp/Login/Login";
import Spots from "./components/Spots/Spots";
import Footer from "./components/shared/Footer";
import Contact from "./components/Contact/Contact";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import SignUp from "./components/LoginSignUp/SignUp/SignUp";
import RequireAuth from "./components/shared/RequireAuth";
import GuideProfile from "./components/Services/GuideProfile/GuideProfile";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blogs/Blog";
import NotFound from "./components/shared/NotFound";
export const GuidsContext = createContext([]);
function App() {
  const [guids, setGuids] = useState([]);
  useEffect(() => {
    fetch("guids.json")
      .then((res) => res.json())
      .then((data) => setGuids(data));
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <GuidsContext.Provider value={{guids,setGuids}}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/services/guide/:guideId" element={
            <RequireAuth>
              <GuideProfile />
            </RequireAuth>
          }></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/spots" element={<Spots></Spots>}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/contact" element={
          <RequireAuth>
            <Contact></Contact>
          </RequireAuth>
          }></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </GuidsContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
