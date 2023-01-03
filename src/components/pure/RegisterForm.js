import { useState } from "react";
import { ROLES } from "../../models/roles.enum";
import { User } from "../../models/user.class";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(ROLES.USER);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    const user = new User(username, email, password, role);
    localStorage.setItem(username, JSON.stringify(user));
  };

  return (
    <form onSubmit={addUser}>
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
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
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" value={role} onChange={handleChangeRole}>
          <option value={ROLES.USER}>User</option>
          <option value={ROLES.ADMIN}>Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;
