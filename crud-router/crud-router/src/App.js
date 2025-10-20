import React, { useState } from "react";
import { BrowserRouter as Router, Routers, Route, Navigate } from "react-router-dom";

// importação das páginas
import Login from "./pages/Login/Login";

// importação do NavBar (menu principal)
import NavBar from "./components/NavBar/NavBar";

function App(){
  // estado global simples para login
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [contacts, setContacts] = useState()

  // função de login
  const handleLogin = (username, password) => {
    if(username === "admin" && password === "123"){
      setIsAuthenticated(true);
    }
    else{
      alert("Usuário ou senha inválidos")
    }
  }

  // função de Logout
  const handleLogout = () => {
    setIsAuthenticated(false)
  }
}
export default App;

