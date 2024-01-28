import { useState } from "react";


export function useModal() {
    const initialState = {
        addUser: false,
        addMatch: false,
        filterByDate: false
    }

    const [modal, setIsOpen] = useState(initialState)

    const openModal = (e) => {
        const name = e.target.name
        setIsOpen({
            ...modal,
            [name]: !modal[name]
        })
    }

    const closeModal = () => {
        setIsOpen(initialState)
    }

    return { modal, openModal, closeModal }
}
