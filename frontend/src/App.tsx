import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


import Home from "./components/Home"
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import SearchComponent from "./components/SearchComponent/SearchUser.tsx";
import MainPage from "./components/SendComponent/MainPage.tsx";
import TransferMoney from "./components/SendComponent/TransferMoney.tsx";





function App() {
 
  return (
    <>

    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Signin" element={<Signin />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/Search" element={<SearchComponent />} />
    <Route path="/transfer" element={<MainPage />} />
    <Route path="/TransferMoney" element={<TransferMoney />} />
    </Routes>
    </Router>

 


    

     





    </>
  )
}

export default App
