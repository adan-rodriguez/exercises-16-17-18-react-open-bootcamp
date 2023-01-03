import React, { useState } from "react";

function LoginForm({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(username, password);
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChangeUsername}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
