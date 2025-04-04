import React, { useState, useEffect } from 'react';
function DarkModeToggle() {
const [darkMode, setDarkMode] =
useState(localStorage.getItem('darkMode') ==='enabled');
useEffect(() => {
document.body.classList.toggle('dark-mode',
darkMode);
localStorage.setItem('darkMode', darkMode ?
'enabled' : 'disabled');
}, [darkMode]);
return (
<button onClick={() => setDarkMode(!darkMode)}>
{darkMode ? 'Light Mode' : 'Dark Mode'}
</button>
);
}
export default DarkModeToggle;