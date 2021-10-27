import React from "react";
import { useHistory, useLocation } from "react-router-dom";
function Home() {
  const history = useHistory();
  console.log("home history:", history);
  console.log('home location:', useLocation());
  return <div> this is Home.</div>;
}

export default Home;
