import { createContext, useState, useEffect }
from "react";
import "../styles/darkmode.css";
export const DarkModeContext = createContext();
export function DarkModeProvider({ children }) {
const [darkMode, setDarkMode] = useState(
localStorage.getItem("darkMode") === "true"
);
useEffect(() => {
if (darkMode) {
document.body.classList.add("dark-mode");
} else {
document.body.classList.remove("darkmode");
}
localStorage.setItem("darkMode", darkMode);
}, [darkMode]);
return (
<DarkModeContext.Provider value={{ darkMode,
setDarkMode }}>
{children}
</DarkModeContext.Provider>
);
}