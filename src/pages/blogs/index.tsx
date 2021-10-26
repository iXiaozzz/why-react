import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/auth-context";

export default function BlogList() {
  const { logout } = useAuth();
  return (
    <div>
      <h4>this is BlogsList</h4>
      <Link to="/blogs/detail/1">跳转</Link>
      <div>
        <button onClick={logout}>退出</button>
      </div>
    </div>
  );
}
