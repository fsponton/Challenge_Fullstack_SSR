import { useContext, useState } from 'react';
import { UserContext } from '../contexts/user-context';
import SearchBar from './forms/SearchBar';
import ModalAddUSer from './modals/ModalAddUser';
import ModalAddMatch from './modals/ModalAddMatch';
import ModalFilterByDate from './modals/ModalFilterByDate';


const AdminConsultantActions = () => {
    const { userData } = useContext(UserContext)


    const [modal, setIsOpen] = useState({
        addUser: false,
        addMatch: false,
        filterByDate: false
    })

    const openCloseModal = (e) => {
        const name = e.target.name
        setIsOpen({
            ...modal,
            [name]: !modal[name]
        })
    }

    return (
        <>

            <SearchBar />
            {userData.role === 'ADMIN' ? (
                <>
                    <li className="nav-item m-2">
                        <button className="btn btn-primary" name="addUser" onClick={(e) => openCloseModal(e)}>
                            Add User
                        </button>
                    </li>
                    <li className="nav-item m-2">
                        <button className="btn btn-primary" name="addMatch" onClick={(e) => openCloseModal(e)}>
                            Add Match
                        </button>
                    </li>
                    <li className="nav-item m-2">
                        <button className="btn btn-primary" name="filterByDate" onClick={(e) => openCloseModal(e)}>
                            Filter
                            By Date
                        </button>
                    </li>
                </>
            ) : null}
            <ModalFilterByDate modal={modal} openCloseModal={openCloseModal} />
            <ModalAddUSer modal={modal} openCloseModal={openCloseModal} />
            <ModalAddMatch modal={modal} openCloseModal={openCloseModal} />
        </>
    )
};

export default AdminConsultantActions;