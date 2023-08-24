import { Button, TextField } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/home");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <div className="layout-center">
      <h2>Login page</h2>
      <form onSubmit={handleNavigation}>
        <div>
          <TextField
            variant="outlined"
            name="username"
            className="login-input"
            type="text"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            name="password"
            className="login-input"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
