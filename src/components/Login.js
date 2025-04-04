import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
function Login() {
const [loginData, setLoginData] = useState({
email: "", password: "" });
const handleInputChange = (e) => {
const { name, value } = e.target;
setLoginData({ ...loginData, [name]: value
});
};
const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await
axios.get("http://localhost:5000/users");
const users = response.data;
const user = users.find(
(u) => u.email === loginData.email &&
u.password === loginData.password
);
if (user) {
alert("Login successful!");
} else {
alert("Invalid email or password.");
}
} catch (error) {
console.error("Error logging in:", error);
}
};
return (
<div className="container">
<h1>Login</h1>
<form onSubmit={handleSubmit}>
<label>Email:</label>
<input type="email" name="email"
value={loginData.email}
onChange={handleInputChange} required />
<label>Password:</label>
<input type="password" name="password"
value={loginData.password}
onChange={handleInputChange} required />
<button type="submit">Login</button>
</form>
</div>
);
}
export default Login;