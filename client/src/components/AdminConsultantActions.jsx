import { useContext } from 'react';
import { UserContext } from '../contexts/user-context';
import SearchBar from './forms/SearchBar';
import ModalAddUSer from './modals/ModalAddUser';
import ModalAddMatch from './modals/ModalAddMatch';
import { useModal } from '../hooks/useModal';

const AdminConsultantActions = () => {
    const { userData } = useContext(UserContext)
    const { modal, openModal, closeModal } = useModal()

    return (
        <>
            <SearchBar />
            {userData.role === 'ADMIN' ? (
                <>
                    <li className="nav-item m-2">
                        <button className="btn btn-primary" name="addUser" onClick={(e) => openModal(e)}>
                            Add User
                        </button>
                    </li>
                    <li className="nav-item m-2">
                        <button className="btn btn-primary" name="addMatch" onClick={(e) => openModal(e)}>
                            Add Match
                        </button>
                    </li>
                </>
            ) : null}
            <ModalAddUSer modal={modal} closeModal={closeModal} />
            <ModalAddMatch modal={modal} closeModal={closeModal} />
        </>
    )
};

export default AdminConsultantActions;