import React from "react";                       
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./com/Navbar";
import Gallery from "./pages/Gallery";
import GueestBook from "./pages/GuestBook";
import ScrollText from "./pages/ScrollText";
import "./App.css";
// BrowserRouter는 새로고침이 안되서 따로 파일 필요, 404page필요 
// => hashbrowser는 추천안함 - #이 추가 되서 뒤로가기 많이하면 종종 에러발생, 이용자에게 불친절
function App() {
    return (
    <Router basename="/react-am">
        <div>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/guestbook" element={<GueestBook/>}/>
                <Route path="/scrollText" element={<ScrollText/>}/>
              </Routes>
        </div>
    </Router> 
  );
}

export default App;
