import React, { useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import Api from "@/api/index";
import "./index.less";
function Login() {
  const { login } = useAuth();
  useEffect(() => {
    // Api.getDemo().then((res) => {
    //   console.log("res1:", res);
    // });
  });
  const handleLogin = () => {
    login({ username: "xiao", password: "123" });
  };
  return (
    <div>
      <button onClick={handleLogin}>登录</button>
      <div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default Login;
