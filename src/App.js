import React from "react";
import { BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import { DarkModeProvider } from
"./context/DarkModeContext";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
return (
<DarkModeProvider>
<Router>
<Header />
<Routes>
<Route path="/" element={<HomePage />}
/>
<Route path="/login" element={<Login
/>} />
<Route path="/register"
element={<Register />} />
</Routes>
<Footer />
</Router>
</DarkModeProvider>
);
}
export default App;