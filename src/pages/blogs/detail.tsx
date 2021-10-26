import React from "react";
import { useParams } from "react-router-dom";

export default function BlogsDetail() {
  const params = useParams();
  console.log("params:", params);
  return <div>this is BlogsDetail</div>;
}
