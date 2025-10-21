import React, { useState } from "react";
import "./Cadastro.css"

function Cadastro({contacts, setContacts}){

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {id: Date.now(), name, phone}

        setContacts([...contacts, newContact])
        setName("");
        setPhone("");
    }

    return(
        <div className="cadastro-container">
            <h2>Cadastrar contato</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Digite o nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="Digite o telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
export default Cadastro;