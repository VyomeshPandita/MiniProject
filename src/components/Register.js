import React, { useState } from "react";
import axios from "axios";
import "../styles/register.css";
function Register() {
const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
phone: ""
});
const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};
const handleSubmit = async (e) => {
e.preventDefault();
try {
await
axios.post("http://localhost:5000/users",
formData);
alert("Registration successful!");
setFormData({ name: "", email: "",
password: "", phone: "" });
} catch (error) {
console.error("Error registering user:",
error);
}
};
return (
<div className="container">
<h1>Register</h1>
<form onSubmit={handleSubmit}>
<label>Full Name</label>
<input type="text" name="name"
value={formData.name}
onChange={handleInputChange} required />
<label>Email</label>
<input type="email" name="email"
value={formData.email}
onChange={handleInputChange} required />
<label>Password</label>
<input type="password" name="password"
value={formData.password}
onChange={handleInputChange} required />
<label>Phone Number</label>
<input type="tel" name="phone"
value={formData.phone}
onChange={handleInputChange} required />
<button type="submit">Register</button>
</form>
</div>
);
}
export default Register;