import React, { useState } from "react";
import { BrowserRouter as Router, Routers, Route, Navigate } from "react-router-dom";

// importação das páginas
import Login from "./pages/Login/Login";

// importação do NavBar (menu principal)
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home/Home";

function App(){
  // estado global simples para login
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [contacts, setContacts] = useState([])

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

  return(
    <Router>
      {isAuthenticated && <NavBar onLogout={handleLogout}></NavBar>}
      <Routers>
        <Route 
        path="/login" 
        element = {isAuthenticated ? <Navigate to="/"/> : <Login onLogin={handleLogin}/>}>
        </Route>

        <Route
        path="/"
        element={
          isAuthenticated ? <Home/> : <Navigate to="/login"/>}>
        </Route>

        <Route
        path="/cadastro"
        element={
          isAuthenticated ? (<Cadastro contacts={contacts} setContacts={contacts}/>) : (<Navigate to="/login"/>)}>
        </Route>

        <Route
        path="/lista"
        element={
          isAuthenticated ? (<Lista contacts={contacts} setContacts={contacts}/>) : (<Navigate to="/login"/>)}>
        </Route>

        <Route
        path="*"
        element={
          <Navigate to="/login"/>}>
        </Route>

      </Routers>
    </Router>
  )
}
export default App;
