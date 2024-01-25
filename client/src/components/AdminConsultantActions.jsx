import { useContext, useState } from 'react';
import { UserContext } from '../contexts/user-context';
import AddMatchForm from './AddMatchForm';
import AddUserForm from './AddUserForm';
import SearchBar from './SearchBar';
import ConsultantFilterMatches from './ConsultantFilterMatches';

const AdminConsultantActions = () => {
    const { userData } = useContext(UserContext)
    const [showAddMatchForm, setShowAddMatchForm] = useState(false);
    const [showAddUserForm, setShowAddUserForm] = useState(false)

    const handleAgregarUsuario = () => {
        setShowAddUserForm(!showAddUserForm)
        setShowAddMatchForm(false)
    };

    const handleAgregarPartido = () => {
        setShowAddMatchForm(!showAddMatchForm)
        setShowAddUserForm(false)
    };

    return (
        <>
            <ConsultantFilterMatches />
            <SearchBar />
            {userData.role === 'ADMIN' ? (
                <>
                    <li className="nav-item m-2">
                        <button className="btn btn-primary " onClick={handleAgregarUsuario}>
                            Add User
                        </button>
                    </li>
                    {showAddUserForm && <AddUserForm />}
                    <li className="nav-item m-2">
                        <button className="btn btn-primary" onClick={handleAgregarPartido}>
                            Add Match
                        </button>
                    </li>
                    {showAddMatchForm && <AddMatchForm />}
                </>
            ) : null}
        </>
    )
};

export default AdminConsultantActions;