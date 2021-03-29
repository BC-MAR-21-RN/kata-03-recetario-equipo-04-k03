import React, { createContext, useState } from 'react'
export const ModalContext = createContext()
const ModalProvider = ({ children }) => {

    const [modal, setModal] = useState('')

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            { children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
