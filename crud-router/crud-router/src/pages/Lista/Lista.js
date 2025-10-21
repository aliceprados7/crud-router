import React, {useState} from "react";
import "./Lista.css"

function Lista({contacts, setContacts}){

    const [editingId, setEditingId] = useState("")
    const [newName, setNewName] = useState("")
    const [newPhone, setNewPhone] = useState("")

    const handleSave = (id) => {
        setContacts(
            
        )
    }

    return(
        <div className="lista-container">
            <h2>Lista de contatos</h2>
            {contacts.length === 0 ? <p>Nenhum contato cadastrado</p> : (
                <ul>
                    {
                        contacts.map((contact) => (
                            <li key={contact.id}>
                                {editingId === contact.id ? 
                                (<>
                                    <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    >
                                    </input>
                                    <input
                                    type="text"
                                    value={newPhone}
                                    onChange={(e) => setNewPhone(e.target.value)}
                                    >
                                    </input>
                                    <button onClick={() => handleSave(contact.id)}>
                                        Salvar
                                    </button>
                                </>)
                                :
                                (
                                    <>
                                        <span>
                                            {contact.name} - {contact.phone}
                                        </span>
                                        <button onClick={() => handleEdit(contact)}>
                                            Editar
                                        </button>
                                        <button onClick={() => handleDelete(contact.id)}>
                                            Deletar
                                        </button>
                                    </>
                                )

                            }
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )

}
export default Lista;