import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Home from "./pages/Home";
import BbcNews from "./pages/BbcNews";
import BitcoinNews from "./pages/BitcoinNews";
import TechNews from "./pages/TechNews";
import Page404 from "./pages/404";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bbcnews' element={<BbcNews/>} />
        <Route path='/bitcoinnews' element={<BitcoinNews/>} />
        <Route path='/technews' element={<TechNews/>} /> 
        <Route path='*' element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
