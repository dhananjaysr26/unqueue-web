import React from 'react'
import '../styles/Login.css'
function Register() {
    return (
<div class="login">
	<h1>Welcome to Unqueue Family</h1>
    <form >
    <input type="text" name="n" placeholder="Company Name" required="required" />
    <input type="email" name="u" placeholder="Email id" required="required" />
    <input type="text" name="add" placeholder="Address" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
<select name="cars" id="cars">
<option value="0">Select Company Type</option>
  <option value="Clilic">Clilic</option>
  <option value="Shop">Shop</option>
  <option value="Hair Saloon">Hair Saloon</option>
  <option value="Hotel">Hotel</option>
  <option value="Others">Others</option>
</select>
    </form>
    <button className="result-btn mrl10">Register</button>
</div>
    )
}

export default Register
