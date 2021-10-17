import React from 'react'
import '../styles/Login.css'
function Login() {
    return (
<div class="login">
	<h1>Time is Money!</h1>
    <form >
    	<input type="email" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button className="result-btn mrl10">Login</button>
    </form>
</div>
    )
}
export default Login
