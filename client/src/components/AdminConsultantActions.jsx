import { useContext, useState } from 'react';
import { UserContext } from '../contexts/user-context';
// import AddMatchForm from './AddMatchForm';
// import AddUserForm from './AddUserForm';
import SearchBar from './SearchBar';
import ConsultantFilterMatches from './ConsultantFilterMatches';
import ModalAddUSer from './modalAddUser';
import ModalAddMatch from './ModalAddMatch';



const AdminConsultantActions = () => {
    const { userData } = useContext(UserContext)


    const [modal, setIsOpen] = useState({
        addUser: false,
        addMatch: false
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
            <ConsultantFilterMatches />
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
                </>
            ) : null}
            <ModalAddUSer modal={modal} openCloseModal={openCloseModal} />
            <ModalAddMatch modal={modal} openCloseModal={openCloseModal} />
        </>
    )
};

export default AdminConsultantActions;