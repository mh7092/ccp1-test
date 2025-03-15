import React, { useState } from 'react';
import './Formstyle.css';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('رمز عبور مطابقت ندارد!');
      return;
    }
    // ارسال اطلاعات به سرور
    console.log('ثبت‌نام:', { username, email, password });
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>ثبت‌نام</h2>
      <div>
        <label>نام کاربری:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>ایمیل:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>رمز عبور:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>تایید رمز عبور:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </div>
      <button type="submit">ثبت‌نام</button>
    </form>
  );
}

export default RegisterForm;