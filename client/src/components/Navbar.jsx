import AdminConsultantActions from "./AdminConsultantActions";
import { useNavigate } from "react-router";
import UserFilterMatches from "./UserFilterMatches";
import { useContext } from "react";
import { MatchesContext } from "../contexts/matches-context";

const Navbar = ({ userData }) => {
    const navigate = useNavigate()
    const { matches } = useContext(MatchesContext)

    const logout = () => {
        sessionStorage.removeItem('session');
        navigate("/")
    }



    const winMatches = (matchs, idJugador) => {
        return matchs.reduce((totalWins, match) => {
            return totalWins + (match.id_win === idJugador ? 1 : 0);
        }, 0);
    };

    const lossMatches = (matchs, idJugador) => {
        return matchs.reduce((totalWins, match) => {
            return totalWins + (match.id_loss === idJugador ? 1 : 0);
        }, 0);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Dashboard</span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <span className="nav-link m-1" style={{ backgroundColor: 'yellow', color: 'black' }}>Total Matches: {matches.length}</span>
                        </li>
                        {userData.role === 'PLAYER' ?
                            <>
                                <li className="nav-item">
                                    <span className="nav-link m-1" style={{ backgroundColor: 'yellow', color: 'black' }}>Matches Win: {winMatches(matches, userData.id)}</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link m-1" style={{ backgroundColor: 'yellow', color: 'black' }}>Matches Loss: {lossMatches(matches, userData.id)}</span>
                                </li>
                            </>
                            : null}
                        <li className="nav-item">
                            <span className="nav-link m-1" style={{ backgroundColor: '#000', color: '#fff' }}>User ID: {userData.id}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link m-1" style={{ backgroundColor: '#000', color: '#fff' }}>Email: {userData.email}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link m-1" style={{ backgroundColor: '#000', color: '#fff' }}>Role: {userData.role}</span>
                        </li>
                        {userData.role === 'PLAYER' ? < UserFilterMatches /> : null}
                        {userData.role === 'ADMIN' || userData.role === 'CONSULTANT' ? < AdminConsultantActions /> : null}
                        <li className="nav-item">
                            <button className="btn btn-danger m-1" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;