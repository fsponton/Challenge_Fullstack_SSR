import AdminConsultantActions from "./AdminConsultantActions";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { MatchesContext } from "../contexts/matches-context";
import winMatches from "../helpers/winMatches";
import lossMatches from "../helpers/lossMatches";
import { UserFilteredContext } from "../contexts/user-filtered-context";
import ModalFilterByDate from "./modals/ModalFilterByDate"
import { useModal } from "../hooks/useModal";

const Navbar = ({ userData }) => {
    const navigate = useNavigate()
    const { matches } = useContext(MatchesContext)
    const { userFiltered } = useContext(UserFilteredContext)
    const { modal, openModal, closeModal } = useModal()

    const logout = () => {
        sessionStorage.removeItem('session');
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Dashboard</span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <span className="nav-link m-2" style={{ backgroundColor: '#000', color: '#fff' }}>User ID: {userData.id}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link m-2" style={{ backgroundColor: '#000', color: '#fff' }}>Email: {userData.email}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link m-2" style={{ backgroundColor: '#000', color: '#fff' }}>Role: {userData.role}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link m-2" style={{ border: "1px solid black", backgroundColor: '#fdfd96', color: 'black' }}>Total: {matches.length}</span>
                        </li>
                        <>
                            <li className="nav-item">
                                <span className="nav-link m-2" style={{ border: "1px solid black", backgroundColor: '#77dd77', color: 'black' }}>Wins: {
                                    !userFiltered ?
                                        winMatches(matches, userData.id)
                                        : winMatches(matches, userFiltered.userID)
                                }</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link m-2" style={{ border: "1px solid black", backgroundColor: '#ff6961', color: 'black' }}>Lost: {
                                    !userFiltered ?
                                        lossMatches(matches, userData.id)
                                        : lossMatches(matches, userFiltered.userID)
                                }</span>
                            </li>
                        </>
                        {userData.role === 'ADMIN' || userData.role === 'CONSULTANT' ?
                            < AdminConsultantActions />
                            : null
                        }
                        <li className="nav-item m-2">
                            <button className="btn btn-primary" name="filterByDate" onClick={(e) => openModal(e)}>
                                Filter
                                By Date
                            </button>
                        </li>
                        <li className="nav-item m-2">
                            <button className="btn" style={{ background: "#ff6961" }} onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
            <ModalFilterByDate modal={modal} closeModal={closeModal} />
        </nav>
    );
};

export default Navbar;