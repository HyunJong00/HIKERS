import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/screen.css";

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login/gender");
  });

  return <div></div>;
}

export default Main;
