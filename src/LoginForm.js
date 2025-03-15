import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // ارسال اطلاعات به سرور
      console.log('ورود:', { username, password });
    };
  
    return (
      <form onSubmit={handleLogin}>
        <h2>ورود</h2>
        <div>
          <label>نام کاربری:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>رمز عبور:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">ورود</button>
      </form>
    );
  }
  
  export default LoginForm;